using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Entities
{
    public class Kendaraan
    {            
        public int Id { get; set; }
        public string? Tipe { get; set; }
        public string? Warna { get; set; }
        public DateTime TanggalBeli { get; set; }
        public int JumlahRoda { get; set; }
    }
}
