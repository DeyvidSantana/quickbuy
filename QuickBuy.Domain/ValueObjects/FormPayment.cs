using QuickBuy.Domain.Enumerations;

namespace QuickBuy.Domain.ValueObjects
{
    public class FormPayment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public bool IsNotDefined
        {
            get { return Id == (int)FormPaymentTypeEnum.NotDefined; }
        }

        public bool IsTicket
        {
            get { return Id == (int) FormPaymentTypeEnum.Ticket; }
        }

        public bool IsCreditCard
        {
            get { return Id == (int)FormPaymentTypeEnum.CreditCard; }
        }

        public bool IsDeposit
        {
            get { return Id == (int)FormPaymentTypeEnum.Deposit; }
        }
    }
}
