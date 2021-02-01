using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStockShop.Domain.User
{
    [Table ("User")]
    public class User
    {
        #region properties
        [Display(Name = "ایمیل")]
        [Required(ErrorMessage = "لطفا  را وارد کنید")]
        [MaxLength(100, ErrorMessage = "تعداد کاراکتر های {0} نمی تواند بیشتر از {1} باشد")]
        public string Email { get; set; }

        [Display(Name = "کلمه ی عبور")]
        [Required(ErrorMessage = "لطفا  را وارد کنید")]
        [MaxLength(100, ErrorMessage = "تعداد کاراکتر های {0} نمی تواند بیشتر از {1} باشد")]
        public string Password { get; set; }

        [Display(Name = "نام")]
        [Required(ErrorMessage = "لطفا  را وارد کنید")]
        [MaxLength(100, ErrorMessage = "تعداد کاراکتر های {0} نمی تواند بیشتر از {1} باشد")]
        public string FirstName { get; set; }

        [Display(Name = "نام خانوادگی")]
        [Required(ErrorMessage = "لطفا  را وارد کنید")]
        [MaxLength(100, ErrorMessage = "تعداد کاراکتر های {0} نمی تواند بیشتر از {1} باشد")]
        public string LastName { get; set; }


        [MaxLength(100, ErrorMessage = "تعداد کاراکتر های {0} نمی تواند بیشتر از {1} باشد")]
        public string EmailActiveCode { get; set; }
        public bool IsActivated { get; set; }

        #endregion

        #region Relations
        //public ICollection<Advertisment> UserRoles { get; set; }
        #endregion



    }
}
