import { Router } from '@angular/router';
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
  public selectedFile: File;
  public active_spinner: boolean; 
  public message: string;

  constructor(private productService: ProductService,
    private router: Router) {

  }

  ngOnInit(): void {
    var productSession = sessionStorage.getItem('productSession');
    if(productSession){
      this.product = JSON.parse(productSession);
    } else {
      this.product = new Product();
    }  
  }

  public inputChange(files: FileList){
    this.selectedFile = files.item(0);
    this.productService.sendFile(this.selectedFile)
      .subscribe(
        fileName => {
          this.product.fileName = fileName;          
          console.log(fileName);
          this.disableLoading();
        },
        e => {
          console.log(e.error);
          this.disableLoading();
        }
      )
  }

  public register() {    
    this.activeLoading();
    this.productService.register(this.product)
      .subscribe(
        product => {
          console.log(product)
          this.disableLoading();
          this.router.navigate(['/search-product']);
        }, e => {
          console.log(e)
          this.message = e.error
          this.disableLoading();
        }
      )
  }

  public activeLoading(){
    this.active_spinner = true;
  }

  public disableLoading(){
    this.active_spinner = false;
  }

}
