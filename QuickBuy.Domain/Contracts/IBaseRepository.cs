using System;
using System.Collections.Generic;

namespace QuickBuy.Domain.Contracts
{
    public interface IBaseRepository<TEntity> : IDisposable where TEntity : class
    {
        IEnumerable<TEntity> GetAll();
        TEntity FindById(int id);
        void Add(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
    }
}
