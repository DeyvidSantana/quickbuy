using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entities;
using System;

namespace QuickBuy.Repository.Config
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder
                .HasKey(o => o.Id);
            builder
                .Property(o => o.OrderDate)
                .IsRequired();
            builder
                .Property(o => o.UserId)
                .IsRequired();
            builder
                .Property(o => o.ExpectedDeliveryDate)
                .IsRequired();
            builder
                .Property(o => o.CEP)
                .IsRequired()
                .HasMaxLength(20);
            builder
                .Property(o => o.State)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .Property(o => o.City)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .Property(o => o.FullAddress)
                .IsRequired()
                .HasMaxLength(150);
            builder
                .Property(o => o.NumberAddress)
                .IsRequired();
            builder
                .Property(o => o.FormPaymentId)
                .IsRequired();
            builder
                .Property(o => o.FormPayment)
                .IsRequired();

        }
    }
}
