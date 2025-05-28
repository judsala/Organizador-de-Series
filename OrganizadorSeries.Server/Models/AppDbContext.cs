using Microsoft.EntityFrameworkCore;

namespace OrganizadorSeries.Server.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Serie> Series => Set<Serie>();
    }
}