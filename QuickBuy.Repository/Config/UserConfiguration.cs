using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entities;
using System;

namespace QuickBuy.Repository.Config
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder
                .HasKey(u => u.Id);
            builder
                .Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .Property(u => u.Password)
                .IsRequired()
                .HasMaxLength(500);
            builder
                .Property(u => u.Name)
                .IsRequired()
                .HasMaxLength(30);
            builder
                .Property(u => u.LastName)
                .IsRequired()
                .HasMaxLength(30);
        }
    }
}
