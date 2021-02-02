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
            List<AdvertisementModel> Mylist =
            _db.Advertisements.Select(ad => new AdvertisementModel
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



    }
}
