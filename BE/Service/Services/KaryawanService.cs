using Data.Repositories;
using DataInterface.Repositories;
using Microsoft.Extensions.Configuration;
using Model.Entities;
using ServiceInterface.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class KaryawanService : IKaryawanService
    {
        private readonly IKaryawanRepository karyawanRepository;
        public KaryawanService(IKaryawanRepository karyawanRepository)
        {
            this.karyawanRepository = karyawanRepository;
        }
        public async Task<List<Karyawan>> GetKaryawan()
        {
            List<Karyawan> result = await karyawanRepository.GetDataKaryawan();
            return result;
        }
    }
}
