using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace services
{
    public interface IAgencyService
    {
        IEnumerable<Agency> GetAll();
        bool Add(Agency model);
        bool Delete(int id);
        bool Update(Agency model);
        Agency Get(int id);
    }
}
