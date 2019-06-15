using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Domain.Entities
{
    public abstract class Entity
    {
        public List<string> messagesValidation;
        private List<string> MessagesValidation
        {
            get { return messagesValidation ?? (messagesValidation = new List<string>()); }
        }

        protected void ClearMessagesValidation()
        {
            MessagesValidation.Clear();
        }

        protected void AddValidation(string message)
        {
            MessagesValidation.Add(message);
        }

        public abstract void Validate();

        /// <summary>
        /// A class is valid if there is no message validation, i.e., no violation.
        /// </summary>
        protected bool IsValid
        {
            get { return MessagesValidation.Any(); }
        }
    }
}
