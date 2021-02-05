using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using OnlineStockShop.Domain.Category;

namespace OnlineStockShop.Domain.Advertisment
{
    public class Advertisement
    {
        #region properties
        [Key]
        public string Id { get; set; }

        public string Title { get; set; }

        public int Price { get; set; }

        public string City { get; set; }

        public string Region { get; set; }

        public string Status { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public string UserId { get; set; }

        public string CategoryId { get; set; }

        public string PictureLink { get; set; }

        public string PhoneNumber { get; set; }

        public DateTime CreationDate { get; set; }

        public DateTime ExpireDate { get; set; }


        #endregion

        #region Relations
        public virtual Category.Category Category { get; set; }
        public virtual User.User User { get; set; }
        #endregion
    }
}
