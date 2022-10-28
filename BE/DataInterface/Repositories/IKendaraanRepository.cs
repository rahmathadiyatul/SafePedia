using Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataInterface.Repositories
{
    public interface IKendaraanRepository
    {
        public Task<List<Kendaraan>> GetDataKendaraan();
    }
}
