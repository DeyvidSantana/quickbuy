namespace QuickBuy.Domain.Entities
{
    public class OrderItem : Entity
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int Amount { get; set; }

        public override void Validate()
        {
            ClearMessagesValidation();

            if (ProductId == 0)
                AddValidation("A order item needs to have at least one product.");

            if(Amount == 0)
            {
                AddValidation("Product amount cannot be zero.");
            }
        }
    }
}
