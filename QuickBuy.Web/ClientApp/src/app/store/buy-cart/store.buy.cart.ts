import { Product } from "../../models/product";

export class StoreBuyCart {
    
    public products: Product[] = [];

    public add(product: Product){
        var productLocalStorage = localStorage.getItem("productLocalStorage");
        if(!productLocalStorage){
            this.products.push(product);            
        } else {
            this.products = JSON.parse(productLocalStorage);
            this.products.push(product);            
        }

        localStorage.setItem("productLocalStorage", JSON.stringify(this.products));
    }

    public getProducts(): Product[]{
        var productLocalStorage = localStorage.getItem("productLocalStorage");
        if(productLocalStorage)
            return JSON.parse(productLocalStorage);
        return this.products;
    }    

    public removeProduct(product: Product){
        var productLocalStorage = localStorage.getItem("productLocalStorage");
        if(productLocalStorage){
            this.products = JSON.parse(productLocalStorage);
            this.products = this.products.filter(p => p.id != product.id);
            localStorage.setItem("productLocalStorage", JSON.stringify(this.products));
        }        
    }

    public update(products: Product[]){
        localStorage.setItem("productLocalStorage", JSON.stringify(products));
    }

    public anyItemsBuyCart(): boolean{
        var items = this.getProducts();
        return (items.length > 0);
    }

    public cleanBuyCart() {
        localStorage.setItem("productLocalStorage", "");
    }
}