using Microsoft.AspNetCore.Mvc;
using StudentsManager.Mvc.Domain.Inputs.Forum;
using StudentsManager.Mvc.Services.Auth;
using StudentsManager.Mvc.Services.Forum;

namespace StudentsManager.Mvc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlidoController : ControllerBase
    {
        private readonly IForumService _service;

        public SlidoController(IForumService service)
        {
            _service = service;
        }

        // GET: api/Slido?limit=20&skip=0
        [HttpGet]
        public async Task<IActionResult> GetQuestions([FromQuery] int limit = 20, int skip = 0)
        {
            var result = await _service.GetAsync(limit, skip);
            return Ok(result);
        }

        // POST: api/Slido/question
        [HttpPost("question")]
        public async Task<IActionResult> PostQuestion([FromBody] string question)
        {
            if (string.IsNullOrEmpty(question))
                return BadRequest("Question cannot be empty");

            await _service.SaveQuestionAsync(
                question,
                Guid.Parse("1eac9820-5e6e-4d10-6e94-08de36f40f78"));

            return Ok("Question posted successfully");
        }
    }
}
