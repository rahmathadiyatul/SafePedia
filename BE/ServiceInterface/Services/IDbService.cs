using Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceInterface.Services
{
    public interface IDbService
    {
        public Task<List<Karyawan>> GetKaryawanData(string command, object param);
        public Task<List<Kendaraan>> GetKendaraanData(string command, object param);

    }
}
