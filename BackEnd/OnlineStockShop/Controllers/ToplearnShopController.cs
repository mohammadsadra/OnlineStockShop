using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineStockShop.Domain.Advertisment;
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
                PictureLink =ad.PictureLink,
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
                Creator = ad.User.LastName,
                Category = ad.Category.CategoryName,
                CreationTime = ad.CreationDate,
                ExpireTime = ad.ExpireDate

            }).ToList();
            return Ok(Mylist);
        }

        [HttpPost]
        [Route("createAdvertisment")]
        public IActionResult createAdvertisment([FromBody] Advertisement advertisement)
        {
            _db.Advertisements.Add(new Advertisement
            {
                Id = advertisement.Id,
                Title = advertisement.Title,
                City = advertisement.City,
                Region = advertisement.Region,
                Address = advertisement.Address,
                PhoneNumber = advertisement.PhoneNumber,
                PictureLink = advertisement.PictureLink,
                Description = advertisement.Description,
                UserId = advertisement.UserId,
                CategoryId = advertisement.CategoryId,
                CreationDate = DateTime.Now,
                ExpireDate = advertisement.ExpireDate
            });
            _db.SaveChanges();
            return Ok("ok");
        }
    }
}
