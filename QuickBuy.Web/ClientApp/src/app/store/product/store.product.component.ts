import { StoreBuyCart } from './../buy-cart/store.buy.cart';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { ProductService } from '../../services/product/product.service';

@Component({
    selector: "app-store-product",
    templateUrl: "./store.product.component.html",
    styleUrls: ["./store.product.component.css"]
})
export class StoreProductComponent implements OnInit{
    public product: any;
    public storeBuyCart: StoreBuyCart;
    
    ngOnInit(): void {
        this.storeBuyCart = new StoreBuyCart();
        var productDetail = sessionStorage.getItem('productDetail');
        if(productDetail){
            this.product = JSON.parse(productDetail);
        }
    }

    constructor(private productService: ProductService,
        private router: Router){

    }

    buy(){
        this.storeBuyCart.add(this.product);
        this.router.navigate(['/store-effectuate']);
    }

}