using Microsoft.EntityFrameworkCore;
using Model;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace services
{
    public class AgencyService : IAgencyService
    {
        private readonly AgencyDbContext _agencyDbContext;

        public AgencyService(AgencyDbContext agencyDbContext)
        {
            _agencyDbContext = agencyDbContext;
        }

        public IEnumerable<Agency> GetAll()
        {
            var result = new List<Agency>();

            try
            {
                result = _agencyDbContext.Agency.ToList();
            }
            catch (System.Exception)
            {

            }

            return result;
        }

        public Agency Get(int id)
        {
            var result = new Agency();

            try
            {
                result = _agencyDbContext.Agency.Single(x => x.Id == id);
            }
            catch (System.Exception)
            {

            }

            return result;
        }

        public bool Add(Agency model)
        {
            try
            {
                _agencyDbContext.Add(model);
                _agencyDbContext.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }

            return true;
        }

        public bool Update(Agency model)
        {
            try
            {
                var originalModel = _agencyDbContext.Agency.Single(x =>
                    x.Id == model.Id
                );

                originalModel.Name = model.Name;
                originalModel.Status = model.Status;
                originalModel.City = model.City;
                originalModel.State = model.State;

                _agencyDbContext.Update(originalModel);
                _agencyDbContext.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }

            return true;
        }

        public bool Delete(int id)
        {
            try
            {
                _agencyDbContext.Entry(new Agency { Id = id }).State = EntityState.Deleted;
                _agencyDbContext.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }

            return true;
        }

    }
}
