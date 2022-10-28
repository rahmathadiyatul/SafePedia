using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Entities
{
    public class Karyawan
    {            
        public int Id { get; set; }
        public string? Nama { get; set; }
        public DateTime TanggalLahir { get; set; }
        public int Umur { get; set; }

        public int JumlahAnak { get; set; }
    }
}
