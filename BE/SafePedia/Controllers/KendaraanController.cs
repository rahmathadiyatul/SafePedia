using Microsoft.AspNetCore.Mvc;
using ServiceInterface.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SafePedia.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class KendaraanController : Controller
    {
        private readonly IKendaraanService kendaraanService;
        public KendaraanController(IKendaraanService kendaraanService)
        {
            this.kendaraanService = kendaraanService;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var result = await kendaraanService.GetKendaraan();
            return Ok(result);
        }
    }
}