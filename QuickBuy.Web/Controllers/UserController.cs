using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using System;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }


        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public ActionResult Post([FromBody] User user)
        {
            try
            {
                var registeredUser = _userRepository.Get(user.Email);

                if (registeredUser != null)                
                    return BadRequest("User already registered in the system!");

                //user.IsAdministrator = true;

                _userRepository.Add(user);

                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost("CheckUser")]
        public ActionResult CheckUser([FromBody] User user)
        {
            try
            {
                var userReturn = _userRepository.Get(user.Email, user.Password);
                if(userReturn != null)
                {
                    return Ok(userReturn);
                }

                return BadRequest("User or password invalid!");                
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
