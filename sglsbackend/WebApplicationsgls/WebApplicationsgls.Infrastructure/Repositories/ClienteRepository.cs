using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplicationsgls.Application.Interfaces;
using WebApplicationsgls.Domain.Entities;
using WebApplicationsgls.Infrastructure.Data;

namespace WebApplicationsgls.Infrastructure.Repositories
{
    public class ClienteRepository : IClienteRepository
    {
        private readonly AppDbContext _context;

        public ClienteRepository(AppDbContext context)
        {
            _context = context;
        }
        public Task AdicionarAsync(Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            return _context.SaveChangesAsync();
        }

        public async Task AtualizarAsync(Cliente cliente)
        {
            var clienteExistente = await _context.Clientes
                .FirstOrDefaultAsync(clienteBD =>
                    clienteBD.Id == cliente.Id
                );
            if (clienteExistente is null) throw new KeyNotFoundException("Cliente não encontrado.");
            var entrada = _context.Entry(clienteExistente);
            await _context.SaveChangesAsync();
        }

        public Task<Cliente?> ObterPorEmailAsync(string email)
        {
            var emailCliente = _context.Clientes.FirstOrDefault(c => c.Email == email);
            return Task.FromResult(emailCliente);
        }

        public Task<Cliente?> ObterPorIdAsync(Guid id)
        {
            return _context.Clientes.FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task RemoverAsync(Cliente cliente)
        {
            _context.Clientes.Remove(cliente);

            await _context.SaveChangesAsync();
        }
        public async Task SalvarAlteracoesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
