using Microsoft.AspNetCore.Mvc;
using OrganizadorSeries.Server.Models;

namespace OrganizadorSeries.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Register(User user)
        {
            // Verifica se o email já existe no banco de dados
            if (_context.Users.Any(u => u.Email == user.Email))
                return BadRequest("Email já cadastrado.");

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User login)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == login.Email && u.Senha == login.Senha);
            if (user == null)
                return Unauthorized("Login inválido!");

            return Ok(user);
        }
    }
}