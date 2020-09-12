using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using QuickBuy.Repository.Context;
using System.Linq;

namespace QuickBuy.Repository.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {
        }

        public User Get(string email, string password)
        {
            return QuickBuyContext.Users.FirstOrDefault(u => u.Email == email
                                                            && u.Password == password);
        }

        public User Get(string email)
        {
            return QuickBuyContext.Users.FirstOrDefault(u => u.Email == email);
        }
    }
}
