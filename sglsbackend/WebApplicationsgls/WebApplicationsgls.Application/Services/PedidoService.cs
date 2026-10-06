using WebApplicationsgls.Application.DTOs;
using WebApplicationsgls.Application.Interfaces;
using WebApplicationsgls.Domain.Entities;
using WebApplicationsgls.Domain.Enums;
using WebApplicationsgls.Domain.Exceptions;

namespace WebApplicationsgls.Application.Services;

public class PedidoService
{
    private readonly IPedidoRepository _pedidoRepository;

    private readonly IProdutoRepository _produtoRepository;

    private readonly EstoqueService _estoqueService;

    public PedidoService(
        IPedidoRepository pedidoRepository,
        IProdutoRepository produtoRepository,
        EstoqueService estoqueService)
    {
        _pedidoRepository = pedidoRepository;
        _produtoRepository = produtoRepository;
        _estoqueService = estoqueService;
    }

    public async Task<Guid> CriarPedidoAsync(
        CriarPedidoDTO dto,
        Guid usuarioId)
    {
        if (dto.Itens == null || !dto.Itens.Any())
            throw new DomainException(
                "Pedido deve conter ao menos um item"
            );

        var pedido = new Pedido(usuarioId);

        foreach (var itemDto in dto.Itens)
        {
            var produto = await _produtoRepository
                .ObterPorIdAsync(itemDto.ProdutoId);

            if (produto == null)
                throw new DomainException("Produto não encontrado");

            if (!produto.Ativo)
                throw new DomainException(
                    $"Produto {produto.Nome} está inativo"
                );

            pedido.AdicionarItem(
                produto,
                itemDto.Quantidade
            );
        }

        await _pedidoRepository.AdicionarAsync(pedido);

        return pedido.Id;
    }

    public async Task FinalizarPedidoAsync(
        Guid pedidoId,
        Guid usuarioId)
    {
        var pedido = await _pedidoRepository
            .ObterPorIdAsync(pedidoId);

        if (pedido == null)
            throw new DomainException("Pedido não encontrado");

        foreach (var item in pedido.Itens)
        {
            await _estoqueService.SaidaAsync(
                new SaidaEstoqueDTO
                {
                    ProdutoId = item.ProdutoId,
                    Quantidade = item.Quantidade,
                    Observacao = $"Pedido #{pedido.Id}"
                },
                usuarioId
            );
        }

        pedido.Finalizar();

        await _pedidoRepository.AtualizarAsync(pedido);
    }

    public async Task CancelarPedidoAsync(
        Guid pedidoId,
        Guid usuarioId)
    {
        var pedido = await _pedidoRepository
            .ObterPorIdAsync(pedidoId);

        if (pedido == null)
            throw new DomainException("Pedido não encontrado");

        foreach (var item in pedido.Itens)
        {
            await _estoqueService.EntradaAsync(
                new EntradaEstoqueDTO
                {
                    ProdutoId = item.ProdutoId,
                    Quantidade = item.Quantidade,
                    Observacao = $"Cancelamento Pedido #{pedido.Id}"
                },
                usuarioId
            );
        }

        pedido.Cancelar();

        await _pedidoRepository.AtualizarAsync(pedido);
    }

    public async Task<List<Pedido>> ListarAsync(
        Guid usuarioId,
        bool isAdmin)
    {
        if (isAdmin)
            return await _pedidoRepository.ListarAsync();

        return await _pedidoRepository
            .ListarPorUsuarioAsync(usuarioId);
    }

    public async Task<Pedido> ObterPorIdAsync(
        Guid pedidoId,
        Guid usuarioId,
        bool isAdmin)
    {
        var pedido = await _pedidoRepository
            .ObterPorIdAsync(pedidoId);

        if (pedido == null)
            throw new DomainException("Pedido não encontrado");

        if (!isAdmin && pedido.UsuarioId != usuarioId)
            throw new DomainException(
                "Você não possui acesso a este pedido"
            );

        return pedido;
    }
}