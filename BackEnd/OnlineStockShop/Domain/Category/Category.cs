using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        [Key]
        public string Id { get; set; }
        public string CategoryName { get; set; }

        public virtual ICollection<Advertisement> Advertisments { get; set; }
    }
}
