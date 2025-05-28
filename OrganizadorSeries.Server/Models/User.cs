using System.ComponentModel.DataAnnotations;

namespace OrganizadorSeries.Server.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;

        public List<Serie> Series { get; set; } = new();
    }
}