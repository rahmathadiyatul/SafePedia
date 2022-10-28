using Microsoft.Extensions.Configuration;
using Model.Entities;
using ServiceInterface.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class DbService : IDbService
    {
        private readonly SqlConnection _db;
        public DbService(IConfiguration configuration)
        {
            _db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
        }
        public async Task<List<Karyawan>> GetKaryawanData(string command, object param)
        {
            var result = new List<Karyawan>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    result.Add(new Karyawan
                    {
                        Id = Convert.ToInt32(reader["id"]),
                        Nama = reader["Nama"].ToString(),
                        TanggalLahir = (DateTime)reader["TanggalLahir"],
                        Umur = Convert.ToInt32(reader["Umur"]),
                        JumlahAnak = Convert.ToInt32(reader["JumlahAnak"])
                    });
                }
                await _db.CloseAsync();
                return result;
            } 
        }
        public async Task<List<Kendaraan>> GetKendaraanData(string command, object param)
        {
            var result = new List<Kendaraan>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    result.Add(new Kendaraan
                    {
                        Id = Convert.ToInt32(reader["Id"]),
                        Tipe = reader["Tipe"].ToString(),
                        Warna = reader["Warna"].ToString(),
                        TanggalBeli = (DateTime)reader["TanggalBeli"],
                        JumlahRoda = Convert.ToInt32(reader["JumlahRoda"])
                    });
                }
                await _db.CloseAsync();
                return result;
            }
        }
    }
}
