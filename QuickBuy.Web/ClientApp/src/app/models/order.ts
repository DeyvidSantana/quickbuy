import { OrderItem } from './orderItem';

export class Order {
    public id: number;
    public orderDate: Date;
    public userId: number;
    public expectedDeliveryDate: Date;
    public cep: string;
    public state: string;
    public city: string;
    public fullAddress: string;
    public numberAddress: number;
    public formPaymentId: number;
    public orderItems: OrderItem[];

    constructor(){
        this.orderDate = new Date();
        this.orderItems = [];
    }
}