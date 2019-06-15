namespace QuickBuy.Domain.Entities
{
    public class Product : Entity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }

        public override void Validate()
        {
            ClearMessagesValidation();
            
            if (string.IsNullOrEmpty(Name))
                AddValidation("Name must be filled.");

            if (string.IsNullOrEmpty(Description))
                AddValidation("Description must be filled.");

            if (Price == 0)
                AddValidation("Price cannot be zero.");
        }
    }
}
