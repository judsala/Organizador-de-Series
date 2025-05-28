namespace OrganizadorSeries.Server.Models
{
    public class Serie
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public string Temporadas { get; set; } = string.Empty;
        public string Observacoes { get; set; } = string.Empty;

        public User User { get; set; } = null!;
    }
}