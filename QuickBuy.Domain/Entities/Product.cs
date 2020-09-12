namespace QuickBuy.Domain.Entities
{
    public class Product : Entity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string FileName { get; set; }

        public override void Validate()
        {            
            if (string.IsNullOrEmpty(Name))
                AddValidation("Name must be filled.");

            if (string.IsNullOrEmpty(Description))
                AddValidation("Description must be filled.");
        }
    }
}
