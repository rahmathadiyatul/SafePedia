using Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceInterface.Services
{
    public interface IKaryawanService
    {
        public Task<List<Karyawan>> GetKaryawan();
    }
}
