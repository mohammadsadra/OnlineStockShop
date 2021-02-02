using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineStockShop.Domain.Advertisment;

namespace OnlineStockShop.Domain.Category
{
    public class Category
    {

        public Category()
        {
            Advertisments = new HashSet<Advertisement>();
        }
        public byte Id { get; set; }
        public string CategoryName { get; set; }

        public virtual ICollection<Advertisement> Advertisments { get; set; }
    }
}
