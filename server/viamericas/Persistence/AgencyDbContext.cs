using Microsoft.EntityFrameworkCore;
using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Persistence
{
    public class AgencyDbContext : DbContext
    {
        public AgencyDbContext(DbContextOptions<AgencyDbContext> options)
           : base(options)
        { }

        public DbSet<Agency> Student { get; set; }
    }
}
