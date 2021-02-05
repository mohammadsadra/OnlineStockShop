using OnlineStockShop.Domain.Advertisment;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStockShop.Domain.Report
{
    public class Report
    {
        [Key]
        public string Id { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public string AdvertismentId { get; set; }
    }
}
