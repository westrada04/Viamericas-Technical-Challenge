using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model;
using services;

namespace viamericas.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AgencyController : ControllerBase
    {
        private readonly IAgencyService _agencyService;

        public AgencyController(IAgencyService agencyService) 
        {
            _agencyService = agencyService;
        }

        // GET /Agency
        [HttpGet]
        public IActionResult Get()
        {   
            return Ok(
               _agencyService.GetAll()
           );
        }

        // GET /Agency/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(
                 _agencyService.Get(id)
             );
        }

        // POST /Agency
        [HttpPost]
        public IActionResult Post([FromBody] Agency model)
        {
            return Ok(
                _agencyService.Add(model)
            );
        }

        // PUT /Agency/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Agency model)
        {
            return Ok(
                _agencyService.Add(model)
            );
        }

        // DELETE /Agency/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(
               _agencyService.Delete(id)
           );
        }
    }
}
