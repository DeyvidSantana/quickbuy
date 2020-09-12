using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Domain.Entities
{
    public abstract class Entity
    {
        private List<string> messagesValidation;
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

        public string GetValidationMessage()
        {
            return string.Join(". ", MessagesValidation);
        }

        public abstract void Validate();

        /// <summary>
        /// A class is valid if there is no message validation, i.e., no violation.
        /// </summary>
        public bool IsValid
        {
            get { return !MessagesValidation.Any(); }
        }
    }
}
