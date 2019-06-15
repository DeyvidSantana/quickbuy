using System.Collections.Generic;

namespace QuickBuy.Domain.Entities
{
    public class User : Entity
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        /// <summary>
        /// A user may have no or many orders
        /// </summary>
        public ICollection<Order> Orders { get; set; }

        public override void Validate()
        {
            ClearMessagesValidation();

            if (string.IsNullOrEmpty(Email))
                AddValidation("Email must be filled.");

            if (string.IsNullOrEmpty(Password))
                AddValidation("Password must be filled.");

            if (string.IsNullOrEmpty(Name))
                AddValidation("Name must be filled.");

            if (string.IsNullOrEmpty(LastName))
                AddValidation("LastName must be filled.");
        }
    }
}
