using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplicationsgls.Application.DTOs;
using WebApplicationsgls.Application.Interfaces;
using WebApplicationsgls.Domain.Entities;

namespace WebApplicationsgls.Application.Services
{
    public class ClienteService
    {
        private readonly IClienteRepository _repository;

        public ClienteService(IClienteRepository repository)
        {
            _repository = repository;
        }

        public async Task<Cliente> CriaClienteAsync(CriarClienteDTO dto)
        {
            var novoCliente = new Cliente(
                dto.Nome,
                dto.Email,
                dto.Telefone,
                BCrypt.Net.BCrypt.HashPassword(dto.Senha)
            );
            await _repository.AdicionarAsync(novoCliente);
            return novoCliente;
        }
        public async Task<Cliente?> ObtemPorEmailAsync(string email)
        {
            return await _repository.ObterPorEmailAsync(email);
        }

    }
}
