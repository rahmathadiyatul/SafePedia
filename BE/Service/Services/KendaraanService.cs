using Data.Repositories;
using DataInterface.Repositories;
using Model.Entities;
using ServiceInterface.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class KendaraanService : IKendaraanService
    {
        private readonly IKendaraanRepository kendaraanRepository;
        public KendaraanService(IKendaraanRepository kendaraanRepository)
        {
            this.kendaraanRepository = kendaraanRepository;
        }
        public async Task<List<Kendaraan>> GetKendaraan()
        {
            List<Kendaraan> result = await kendaraanRepository.GetDataKendaraan();
            return result;
        }
    }
}
