using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.ValueObjects;
using System;

namespace QuickBuy.Repository.Config
{
    public class FormPaymentConfiguration : IEntityTypeConfiguration<FormPayment>
    {
        public void Configure(EntityTypeBuilder<FormPayment> builder)
        {
            throw new NotImplementedException();
        }
    }
}
