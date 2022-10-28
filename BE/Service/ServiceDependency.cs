﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Service.Services;
using ServiceInterface.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class ServiceDependency
    {
        public static void Register(IConfiguration configuration, IServiceCollection services)
        {
            services.AddScoped<IDbService, DbService>();
            services.AddScoped<IKaryawanService, KaryawanService>();
            services.AddScoped<IKendaraanService, KendaraanService>();
        }
    }
}
