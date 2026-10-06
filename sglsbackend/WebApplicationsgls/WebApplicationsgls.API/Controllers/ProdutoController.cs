using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WebApplicationsgls.Application.DTOs;
using WebApplicationsgls.Application.Services;
using WebApplicationsgls.API.Authorization;

namespace WebApplicationsgls.API.Controllers;

[ApiController]
[Route("api/produtos")]
[Authorize(Policy = AuthorizationPolicies.InternalUser)]
public class ProdutoController : ControllerBase
{
    private readonly ProdutoService _service;

    public ProdutoController(ProdutoService service)
    {
        _service = service;
    }

    [HttpGet]
    [Authorize(Roles = "Admin,Vendedor")]
    public async Task<IActionResult> Listar()
    {
        var usuarioId = Guid.Parse(
            User.FindFirst(ClaimTypes.NameIdentifier)!.Value
        );

        var isAdmin = User.IsInRole("Admin");

        var produtos = await _service.ListarAsync(usuarioId, isAdmin);

        return Ok(produtos);
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "Admin,Vendedor")]
    public async Task<IActionResult> Obter(Guid id)
    {
        var usuarioId = Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
        var isAdmin = User.IsInRole("Admin");

        var produto = await _service.ObterPorIdAsync(id, usuarioId, isAdmin);

        if (produto == null)
            return NotFound();

        return Ok(produto);
    }


    [HttpPost]
    [Authorize(Roles = "Admin,Vendedor")]
    public async Task<IActionResult> Criar(CriarProdutoDTO dto)
    {
        var usuarioId = Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value); //Capturando o Id do usuário logado
        var produtoCriado = await _service.CriarAsync(dto, usuarioId);

        return CreatedAtAction(nameof(Obter), new { id = produtoCriado.Id }, produtoCriado);
    }

    [HttpPut]
    [Authorize(Roles = "Admin,Vendedor")]
    public async Task<IActionResult> Atualizar(AtualizarProdutoDTO dto)
    {
        var usuarioId = Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
        var isAdmin = User.IsInRole("Admin");

        await _service.AtualizarAsync(dto, usuarioId, isAdmin);
        return Ok();
    }


    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Remover(Guid id)
    {
        await _service.RemoverAsync(id);
        return Ok();
    }
}

