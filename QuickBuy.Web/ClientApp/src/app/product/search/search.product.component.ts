import { Router } from '@angular/router';
import { ProductService } from './../../services/product/product.service';
import { Product } from './../../models/product';
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "search-product",
    templateUrl: "./search.product.component.html",
    styleUrls: ["./search.product.component.css"]
})
export class SearchProductComponent implements OnInit  {

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
                    console.log(e.error);                
                }
        )
    }

    public addProduct(){
        sessionStorage.setItem('productSession', "");
        this.router.navigate(['/product']);
    }

    public deleteProduct(product: Product){
        var userDecision = confirm("Are you sure you want to delete the selected product?");
        if(userDecision == true){
            this.productService.delete(product)
                .subscribe(
                    products => {
                        this.products = products;
                    },
                    e => {
                        console.log(e.errors);
                        
                    }
                )
        }
    }

    public editProduct(product: Product){
        sessionStorage.setItem('productSession', JSON.stringify(product));
        this.router.navigate(['/product']);
    }

}      