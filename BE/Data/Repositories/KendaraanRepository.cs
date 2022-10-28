using DataInterface.Repositories;
using Model.Entities;
using ServiceInterface.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class KendaraanRepository : IKendaraanRepository
    {
        private readonly IDbService _dbService;
        public KendaraanRepository(IDbService dbService)
        {
            _dbService = dbService;
        }
        public async Task<List<Kendaraan>> GetDataKendaraan()
        {
            List<Kendaraan> result = await _dbService.GetKendaraanData(
                "SELECT * FROM KendaraanPerusahaan;", new { });
            return result;
        }
    }
}
