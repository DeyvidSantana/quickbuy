using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using System;
using System.IO;
using System.Linq;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;
        private IHttpContextAccessor _httpContextAccessor;
        private IWebHostEnvironment _hostingEnvironment;

        public ProductController(IProductRepository productRepository,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment hostingEnvironment)
        {
            _productRepository = productRepository;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                return Json(_productRepository.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Add([FromBody] Product product)
        {
            try
            {
                product.Validate();
                if (!product.IsValid)                
                    return BadRequest(product.GetValidationMessage());                

                if(product.Id > 0)                
                    _productRepository.Update(product);                
                else               
                    _productRepository.Add(product);                

                return Created("api/product", product);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("Delete")]
        public IActionResult Delete([FromBody] Product product)
        {
            try
            {
                _productRepository.Delete(product);
                return Json(_productRepository.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("SendFile")]
        public IActionResult SendFile()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["fileSent"];
                var fileName = formFile.FileName;
                var extension = fileName.Split(".").Last();
                var newFileName = GenerateNewFileName(fileName, extension);
                var filesPath = _hostingEnvironment.WebRootPath + "\\files\\";
                var fullName = filesPath + newFileName;

                using (var fileStream = new FileStream(fullName, FileMode.Create))
                {
                    formFile.CopyTo(fileStream);
                }

                return Json(newFileName);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        private string GenerateNewFileName(string fileName, string extension)
        {
            var arrayCompressedName = Path.GetFileNameWithoutExtension(fileName).Take(10).ToArray();
            var newFileName = new string(arrayCompressedName).Replace(" ", "-") + ".";
            newFileName = $"{newFileName}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}.{extension}";
            return newFileName;
        }
    }
}
