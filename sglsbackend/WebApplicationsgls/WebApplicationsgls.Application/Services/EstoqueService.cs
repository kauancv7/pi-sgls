using WebApplicationsgls.Application.DTOs;
using WebApplicationsgls.Application.Interfaces;
using WebApplicationsgls.Domain.Entities;
using WebApplicationsgls.Domain.Enums;
using WebApplicationsgls.Domain.Exceptions;

namespace WebApplicationsgls.Application.Services;

public class EstoqueService
{
    private readonly IProdutoRepository _produtoRepository;

    private readonly IMovimentacaoEstoqueRepository
        _movimentacaoRepository;

    public EstoqueService(
        IProdutoRepository produtoRepository,
        IMovimentacaoEstoqueRepository movimentacaoRepository)
    {
        _produtoRepository = produtoRepository;
        _movimentacaoRepository = movimentacaoRepository;
    }

    public async Task EntradaAsync(
        EntradaEstoqueDTO dto,
        Guid usuarioId)
    {
        var produto = await _produtoRepository
            .ObterPorIdAsync(dto.ProdutoId);

        if (produto == null)
            throw new DomainException(
                "Produto não encontrado"
            );

        if (!produto.Ativo)
            throw new DomainException(
                "Produto está inativo"
            );

        produto.AdicionarEstoque(dto.Quantidade);

        await _produtoRepository.AtualizarAsync(produto);

        var movimentacao = MovimentacaoEstoque.CriarEntrada(
            produto.Id,
            usuarioId,
            dto.Quantidade,
            dto.Observacao
        );

        await _movimentacaoRepository
            .RegistrarAsync(movimentacao);
    }

    public async Task SaidaAsync(
        SaidaEstoqueDTO dto,
        Guid usuarioId)
    {
        var produto = await _produtoRepository
            .ObterPorIdAsync(dto.ProdutoId);

        if (produto == null)
            throw new DomainException(
                "Produto não encontrado"
            );

        if (!produto.Ativo)
            throw new DomainException(
                "Produto está inativo"
            );

        produto.RemoverEstoque(dto.Quantidade);

        await _produtoRepository.AtualizarAsync(produto);

        var movimentacao = MovimentacaoEstoque.CriarSaida(
            produto.Id,
            usuarioId,
            dto.Quantidade,
            dto.Observacao
        );

        await _movimentacaoRepository
            .RegistrarAsync(movimentacao);
    }
}