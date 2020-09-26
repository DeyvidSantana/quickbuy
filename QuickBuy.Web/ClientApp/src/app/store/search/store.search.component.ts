import { Router } from '@angular/router';
import { ProductService } from './../../services/product/product.service';
import { Component, OnInit } from "@angular/core";
import { Product } from '../../models/product';

@Component({
    selector: "app-store",
    templateUrl: "./store.search.component.html",
    styleUrls: ["./store.search.component.css"]
})
export class StoreSearchComponent implements OnInit{

    public products: Product[];

    ngOnInit(): void {
    
    }

    constructor(private productService: ProductService,
        private router: Router){
        this.productService.getAllProducts()
            .subscribe(
                products => {
                    this.products = products;
                },
                e => {
                    console.log(e.erros);                    
                }
            )
    }

    openProduct(product: Product){
        sessionStorage.setItem('productDetail', JSON.stringify(product));
        this.router.navigate(['/store-product']);
    }

}