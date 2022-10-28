using Microsoft.AspNetCore.Mvc;
using ServiceInterface.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SafePedia.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class KaryawanController : Controller
    {
        private readonly IKaryawanService karyawanService;
        public KaryawanController(IKaryawanService karyawanService)
        {
            this.karyawanService = karyawanService;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var result = await karyawanService.GetKaryawan();
            return Ok(result);
        }
    }    
}