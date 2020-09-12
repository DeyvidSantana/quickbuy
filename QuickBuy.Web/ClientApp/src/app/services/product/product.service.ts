import { Product } from './../../models/product';
import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProductService implements OnInit{    
    private _baseUrl: string;
    public products: Product[];

    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application-json');
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    ngOnInit(): void {
        this.products = [];
    }

    public register(product: Product): Observable<Product>{        
        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body = {
            name: product.name,
            description: product.description,
            price: product.price,
            fileName: product.fileName
        };

        return this.http.post<Product>(this._baseUrl + "api/product", body, {headers});
    }

    public save(product: Product): Observable<Product>{        
        return this.http.post<Product>(this._baseUrl + "api/product/save", JSON.stringify(product), {headers: this.headers});
    }

    public delete(product: Product): Observable<Product>{       
        return this.http.post<Product>(this._baseUrl + "api/product/delete", JSON.stringify(product), {headers: this.headers});
    }

    public getAllProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this._baseUrl + "api/product");
    }

    public getProduct(productId: number): Observable<Product> {
        return this.http.get<Product>(this._baseUrl + "api/product");
    }

    public sendFile(selectedArchive: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append("fileSent", selectedArchive, selectedArchive.name);

        return this.http.post<string>(this._baseUrl + "api/product/sendFile", formData);
    }
}