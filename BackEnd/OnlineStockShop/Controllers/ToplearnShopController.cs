using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineStockShop.Domain.Context;
using OnlineStockShop.Models;

namespace OnlineStockShop.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ToplearnShopController : Controller
    {
        private readonly OnlineStockShopDbContext _db;
        public ToplearnShopController(OnlineStockShopDbContext _DbContext)
        {

            _db = _DbContext;

        }

        [HttpGet]
        [Route("GetAdvertisment")]
        public IActionResult GetAdvertisements()
        {

            List<AdvertisementModel> Mylist = _db.Advertisements.Select(ad => new AdvertisementModel
            {
                Title = ad.Title,
                City = ad.City,
                Region = ad.Region,
                Address = ad.Address,
                PhoneNumber = ad.PhoneNumber,
                Description = ad.Description,
                Creator = ad.User.LastName,
                Category = ad.Category.CategoryName,
                CreationTime = ad.CreationDate,
                ExpireTime = ad.ExpireDate

            }).ToList();
            return Ok(Mylist);
        }

        [HttpGet]
        [Route("GetAdvertismentByCategory")]
        public IActionResult GetAdvertismentByCategory(int categoryId)
        {

            List<AdvertisementModel> Mylist = _db.Advertisements.Where(adv => adv.CategoryId == categoryId).Select(ad => new AdvertisementModel
            {
                Title = ad.Title,
                City = ad.City,
                Region = ad.Region,
                Address = ad.Address,
                PhoneNumber = ad.PhoneNumber,
                Description = ad.Description,
                CreatorId = ad.UserId,
                CategoryId = ad.CategoryId,
                CreationTime = ad.CreationDate,
                ExpireTime = ad.ExpireDate

            }).ToList();
            return Ok(Mylist);
        }

        [HttpPost]
        [Route("createAdvertisment")]
        public IActionResult createAdvertisment([FromBody] AdvertisementModel model)
        {

            DateTime creationTime = DateTime.Now;

            var newAd = new AdvertisementModel()
            {
                Title = model.Title,
                City = model.City,
                Region = model.Region,
                Address = model.Address,
                PhoneNumber = model.PhoneNumber,
                Description = model.Description,
                CreatorId = model.CreatorId,
                CategoryId = model.CategoryId,
                CreationTime = creationTime,
                ExpireTime = model.ExpireTime
            };
            _db.Advertisements.Add(newAd);

            return Ok("ok");
        }





    }
}
