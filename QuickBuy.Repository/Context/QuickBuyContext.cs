using Microsoft.EntityFrameworkCore;
using QuickBuy.Domain.Entities;
using QuickBuy.Domain.ValueObjects;
using QuickBuy.Repository.Config;

namespace QuickBuy.Repository.Context
{
    public class QuickBuyContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<FormPayment> FormPayment { get; set; }

        public QuickBuyContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
            modelBuilder.ApplyConfiguration(new OrderItemConfiguration());
            modelBuilder.ApplyConfiguration(new FormPaymentConfiguration());

            modelBuilder.Entity<FormPayment>().HasData(
                new FormPayment()
                {
                    Id = 1,
                    Name = "Ticket",
                    Description = "Ticket Payment Form"
                },
                new FormPayment()
                {
                    Id = 2,
                    Name = "Credit Card",
                    Description = "Credit Card Payment Form"
                },
                new FormPayment()
                {
                    Id = 3,
                    Name = "Deposit",
                    Description = "Deposit Payment Form"
                }
);

            base.OnModelCreating(modelBuilder);
        }
    }
}
