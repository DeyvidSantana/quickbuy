import { ProductService } from './../services/product/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {

  public product: Product;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.product = new Product();
  }

  public register() {    
    this.productService.register(this.product)
      .subscribe(
        product => {
          console.log(product)
        }, error => {
          console.log(error)
        }
      )
  }

}
