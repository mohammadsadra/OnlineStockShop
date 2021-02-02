using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineStockShop.Domain.Report;
using OnlineStockShop.Domain.Context;
using OnlineStockShop.Models;

namespace OnlineStockShop.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ReportController : Controller
    {
        private readonly OnlineStockShopDbContext _db;
        public ReportController(OnlineStockShopDbContext _DbContext)
        {

            _db = _DbContext;

        }

        [HttpGet]
        [Route("GetReport")]
        public IActionResult GetReport()
        {

            List<ReportModel> Mylist = _db.Reports.Select(report => new ReportModel
            {
                Description = report.Description,
                Title = report.Title,
                AdvertisementId = report.AdvertismentId
            }).ToList();

            return Ok(Mylist);
        }

        [HttpGet]
        [Route("GetReportByAdvertisment")]
        public IActionResult GetReportByAdvertisment(int advertisementId)
        {

            List<ReportModel> Mylist = _db.Reports
            .Where(r => r.AdvertismentId == advertisementId)
            .Select(report => new ReportModel
            {
                Description = report.Description,
                Title = report.Title,
                AdvertisementId = report.AdvertismentId
            }).ToList();

            return Ok(Mylist);
        }

        [HttpPost]
        [Route("CreateReport")]
        public IActionResult CreateReport([FromBody] Report report)
        {
            _db.Reports.Add(new Report
            {
                Id = report.Id,
                Description = report.Description,
                Title = report.Title,
                AdvertismentId = report.AdvertismentId,
                Advertisment = report.Advertisment
            });
            _db.SaveChanges();
            return Ok("ok");
        }

    }
}
