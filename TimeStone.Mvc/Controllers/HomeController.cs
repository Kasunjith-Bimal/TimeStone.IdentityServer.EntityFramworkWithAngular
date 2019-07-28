using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using TimeStone.Mvc.Models;

namespace TimeStone.Mvc.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Login()
        {
            return Challenge(new AuthenticationProperties { RedirectUri = "Home/Index" }, "oidc");
        }

        public IActionResult Logout()
        {
            return SignOut(new AuthenticationProperties { RedirectUri = "Home/Index" }, "Cookies","oidc");
        }

        [HttpGet]
        public async Task<IActionResult> CallApi()
        {
         var apiUrl = "http://localhost:3787/api/Test";

            var at = (await HttpContext.AuthenticateAsync()).Properties.Items.Where(x => x.Key == ".Token.access_token").FirstOrDefault().Value;
            var client = new HttpClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", at.ToString());
            //client.setBearToken
            var response = await client.GetAsync(apiUrl);

            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStringAsync();
                ViewData["Json"] = json;
            }
            else
            {
                ViewData["Json"] = "Error:"+response.StatusCode;
            }


            return View("CallApi");

        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
