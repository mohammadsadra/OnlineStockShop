using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStockShop.Models
{
    public class AdvertisementModel
    {

        public string Title { get; set; }

        public string City { get; set; }

        public string Region { get; set; }

        public string Address { get; set; }

        public string PictureLink { get; set; }

        public string PhoneNumber { get; set; }

        public string Description { get; set; }

        public string Creator { get; set; }

        public string Category { get; set; }

        public DateTime CreationTime { get; set; }

        public DateTime ExpireTime { get; set; }
    }
}
