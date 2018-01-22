using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Zer0neWebsite.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Test()
        {
            return View();
        }
        public IActionResult Page(string viewTitle)
        {
            //var viewsDir = _env.WebRootPath + "\views";
            //var viewPath = viewsDir + "\\" + viewTitle;
            //var fileView = System.IO.File.ReadAllText(viewPath);
            //ViewBag.test = "test";
            return View(viewName: viewTitle);
        }
        public IActionResult Error()
        {
            return View();
        }
    }
}
