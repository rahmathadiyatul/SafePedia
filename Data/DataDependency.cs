﻿using Data.Repositories;
using DataInterface.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class DataDependency
    {
        public static void Register(IConfiguration configuration, IServiceCollection services)
        {
            services.AddScoped<IKaryawanRepository, KaryawanRepository>();
            services.AddScoped<IKendaraanRepository, KendaraanRepository>();
        }
    }
}
