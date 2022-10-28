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
    public class KaryawanRepository : IKaryawanRepository
    {
        private readonly IDbService _dbService;
        public KaryawanRepository(IDbService dbService)
        {
            _dbService = dbService;
        }
        public async Task<List<Karyawan>> GetDataKaryawan()
        {
             List<Karyawan> result = await _dbService.GetKaryawanData(
                 "SELECT * FROM Karyawan;", new { });
            return result;
        }
    }
}
