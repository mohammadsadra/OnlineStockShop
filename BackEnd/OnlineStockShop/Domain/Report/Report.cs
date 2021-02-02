using OnlineStockShop.Domain.Advertisment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStockShop.Domain.Report
{
    public class Report
    {

        public byte Id { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }


        public byte AdvertismentId { get; set; }

        public virtual Advertisement Advertisment { get; set; }
    }
}
