using Microsoft.EntityFrameworkCore;
using OnlineStockShop.Domain.Advertisment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStockShop.Domain.Context
{
    public class OnlineStockShopDbContext : DbContext
    {
        public OnlineStockShopDbContext(DbContextOptions<OnlineStockShopDbContext> dbContextOptions)
       : base(dbContextOptions)
        {

        }

        public DbSet<Category.Category> Categories { get; set; }
        public DbSet<Advertisement> Advertisements { get; set; }
        public DbSet<Report.Report> Reports { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
