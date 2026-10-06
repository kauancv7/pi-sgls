namespace WebApplicationsgls.Application.DTOs;

using WebApplicationsgls.Domain.Enums;

public class AuthResponseDTO
{
    public string Token { get; set; } = string.Empty;
    public DateTime Expiracao { get; set; }
    public PerfilUsuarioEnum? Perfil { get; set; }
    public string TipoAcesso { get; set; } = string.Empty;
}
