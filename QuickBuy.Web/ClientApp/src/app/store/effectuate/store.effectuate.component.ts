import { Router } from '@angular/router';
import { OrderService } from './../../services/order/order.service';
import { OrderItem } from './../../models/orderItem';
import { UserService } from './../../services/user/user.service';
import { StoreBuyCart } from './../buy-cart/store.buy.cart';
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product/product.service";
import { Product } from '../../models/product';
import { Order } from '../../models/order';
import { overrideProvider } from '@angular/core/src/view';

@Component({
    selector: "app-store-effectuate",
    templateUrl: "./store.effectuate.component.html",
    styleUrls: ["./store.effectuate.component.css"]
})
export class StoreEffectuateComponent implements OnInit{
    public storeBuyCart: StoreBuyCart;
    public products: Product[];
    public total: number;

    ngOnInit(): void {
        this.storeBuyCart = new StoreBuyCart();
        this.products = this.storeBuyCart.getProducts();
        this.updateTotal();
    }

    constructor(private userService: UserService,
        private orderService: OrderService,
        private router: Router){

    }

    public updatePrice(product: Product, amount: number){
        if(!product.originalPrice){
            product.originalPrice = product.price;
        }

        if(amount <= 0){
            amount = 1;
            product.amount = amount;
        }

        product.price = product.originalPrice * amount;

        this.storeBuyCart.update(this.products);
        this.updateTotal();
    }    

    public remove(product: Product){
        this.storeBuyCart.removeProduct(product);
        this.products = this.storeBuyCart.getProducts();
        this.updateTotal();
    }

    public updateTotal(){
        this.total = this.products.reduce((acc, product) => acc + product.price,0);
    }

    public makePurchase(){        
        this.orderService.makePurchase(this.createOrder())
            .subscribe(orderId => {
                sessionStorage.setItem("orderId", orderId.toString());
                this.products = [];
                this.storeBuyCart.cleanBuyCart();
                this.router.navigate(["/store-purchase-made"]);
            }, e => {

            });
        
    }

    public createOrder(): Order {
        let order = new Order();
        order.userId = this.userService.user.id;
        order.cep = '54000000';
        order.city = "Jaboatão";
        order.state = "PE";
        order.expectedDeliveryDate = new Date();
        order.formPaymentId = 1;
        order.numberAddress = 999999999;
        order.fullAddress = "Rua do Sossego"

        this.products = this.storeBuyCart.getProducts();
        for(let product of this.products){
            let orderItem = new OrderItem();
            orderItem.productId = product.id;            

            if(!product.amount)
                product.amount = 1;                            

            orderItem.amount = product.amount;
            order.orderItems.push(orderItem);
        }

        return order;
    }

}