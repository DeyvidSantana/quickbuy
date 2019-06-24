using QuickBuy.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Domain.Entities
{
    public class Order : Entity
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public DateTime ExpectedDeliveryDate { get; set; }
        public string CEP { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string FullAddress { get; set; }
        public int NumberAddress { get; set; }
        public int FormPaymentId { get; set; }
        public virtual FormPayment FormPayment { get; set; }
        /// <summary>
        /// Order must have at least one order item or many
        /// </summary>
        public virtual ICollection<OrderItem> OrderItems { get; set; }

        public override void Validate()
        {
            ClearMessagesValidation();

            if (!OrderItems.Any())
                AddValidation("A order needs to have at least one order item.");

            if (string.IsNullOrEmpty(CEP))
                AddValidation("CEP must be filled.");

            if (string.IsNullOrEmpty(State))
                AddValidation("State must be filled.");

            if (string.IsNullOrEmpty(City))
                AddValidation("City must be filled.");

            if (string.IsNullOrEmpty(FullAddress))
                AddValidation("Full Address must be filled.");            
        }
    }
}
