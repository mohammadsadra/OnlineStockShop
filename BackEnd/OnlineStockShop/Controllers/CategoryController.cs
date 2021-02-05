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
    [ApiController]
    [Route("[controller]")]
    public class CategoryController : Controller
    {
        private readonly OnlineStockShopDbContext _db;
        public CategoryController(OnlineStockShopDbContext _DbContext)
        {

            _db = _DbContext;

        }

        //[HttpGet]
        //[Route("GetCategories")]
        //public IActionResult GetCategories()
        //{
        //    List<CategoryModel> Mylist = _db.Categories.Select(category => new CategoryModel
        //    {
        //        Id = category.Id,
        //        CategoryName = category.CategoryName
        //    }).ToList();
        //    return Ok(Mylist);
        //}
    }
}
