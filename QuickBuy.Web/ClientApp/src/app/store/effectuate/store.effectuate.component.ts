import { StoreBuyCart } from './../buy-cart/store.buy.cart';
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product/product.service";
import { Product } from '../../models/product';

@Component({
    selector: "app-store-effectuate",
    templateUrl: "./store.effectuate.component.html",
    styleUrls: ["./store.effectuate.component.css"]
})
export class StoreEffectuateComponent implements OnInit{
    public storeBuyCart: StoreBuyCart;
    public products: Product[];

    ngOnInit(): void {
        this.storeBuyCart = new StoreBuyCart();
        this.products = this.storeBuyCart.getProducts();
    }

    constructor(private productService: ProductService){

    }

}