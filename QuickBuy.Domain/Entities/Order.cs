using QuickBuy.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Domain.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public int UserId { get; set; }
        public DateTime ExpectedDeliveryDate { get; set; }
        public string CEP { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string FullAddress { get; set; }
        public int NumberAddress { get; set; }
        public int MyProperty { get; set; }
        public int FormPaymentId { get; set; }
        public FormPayment FormPayment { get; set; }
        /// <summary>
        /// Order must have at least one order item or many
        /// </summary>
        public ICollection<OrderItem> OrderItems { get; set; }
    }
}
