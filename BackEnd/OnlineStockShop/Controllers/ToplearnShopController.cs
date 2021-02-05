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

           List<AdvertisementModel> Mylist = _db.Advertisements
           .Where(adv => DateTime.Compare(DateTime.Now, adv.ExpireDate) <= 0)
           .Select(ad => new AdvertisementModel
           {
               Id = ad.Id,
               Title = ad.Title,
               Price = ad.Price,
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
        public IActionResult GetAdvertismentByCategory(string categoryId)
        {

           List<AdvertisementModel> Mylist = _db.Advertisements
           .Where(adv => (adv.CategoryId == categoryId) && (DateTime.Compare(DateTime.Now, adv.ExpireDate) <= 0))
           .Select(ad => new AdvertisementModel
           {
               Id = ad.Id,
               Title = ad.Title,
               Price = ad.Price,
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
                Price = advertisement.Price,
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

        [HttpPut]
        [Route("UpdateAdvertisment")]
        public IActionResult UpdateAdvertisment([FromBody] Advertisement advertisement)
        {
            /*
            This api won't change user-id nor the creation date.
            Expiration date could be changed for premium users that has not 
            been implemented yet
            */
            Advertisement toBeUpdated = _db.Advertisements.Where(ad => ad.Id == advertisement.Id).FirstOrDefault();  
            if (toBeUpdated != null)  
            {  
                toBeUpdated.Id = advertisement.Id;
                toBeUpdated.Title = advertisement.Title;
                toBeUpdated.Price = advertisement.Price;
                toBeUpdated.City = advertisement.City;
                toBeUpdated.Region = advertisement.Region;
                toBeUpdated.Address = advertisement.Address;
                toBeUpdated.PhoneNumber = advertisement.PhoneNumber;
                toBeUpdated.PictureLink = advertisement.PictureLink;
                toBeUpdated.Description = advertisement.Description;
                toBeUpdated.CategoryId = advertisement.CategoryId;
                toBeUpdated.ExpireDate = advertisement.ExpireDate;
                _db.SaveChanges(); 
                return Ok("Updated the advertisement successfully");  
            }   
            return NotFound("Did not find the advertisement!"); 
        }

        [HttpDelete]
        [Route("DeleteAdvertisment")]
        public IActionResult DeleteAdvertisment(string id)
        {  
           Advertisement toBeDeleted = _db.Advertisements.Where(ad => ad.Id == id).FirstOrDefault();  
           if (toBeDeleted != null)  
           {  
               _db.Advertisements.Remove(toBeDeleted);  
               _db.SaveChanges(); 
               return Ok("Deleted the advertisement successfully"); 
           }     
           return NotFound("Did not find the advertisement!"); 
        }
    }
}