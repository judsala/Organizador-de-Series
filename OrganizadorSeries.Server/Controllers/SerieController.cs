using Microsoft.AspNetCore.Mvc;
using OrganizadorSeries.Server.Models;

namespace OrganizadorSeries.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SerieController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SerieController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostSerie(Serie serie)
        {
            _context.Series.Add(serie);
            await _context.SaveChangesAsync();
            return Ok(serie);
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetSeriesByUser(int userId)
        {
            var series = _context.Series.Where(s => s.UserId == userId).ToList();
            return Ok(series);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutSerie(int id, Serie serie)
        {
            var serieDb = await _context.Series.FindAsync(id);
            if (serieDb == null) return NotFound();
            serieDb.Titulo = serie.Titulo;
            serieDb.Temporadas = serie.Temporadas;
            serieDb.ImagemUrl = serie.ImagemUrl;
            serieDb.Observacoes = serie.Observacoes;
            await _context.SaveChangesAsync();
            return Ok(serieDb);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSerie(int id)
        {
            var serie = await _context.Series.FindAsync(id);
            if (serie == null) return NotFound();
            _context.Series.Remove(serie);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}