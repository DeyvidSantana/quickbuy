import { Order } from './../../models/order';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    public _baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){
        this._baseUrl = baseUrl;
    }

    public makePurchase(order: Order): Observable<number>{
        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body = {
            id: order.id,
            orderDate: order.orderDate,
            expectedDeliveryDate: order.expectedDeliveryDate,
            state: order.state,
            city: order.city,
            fullAddress: order.fullAddress,
            numberAddress: order.numberAddress,
            formPaymentId: order.formPaymentId,
            orderItems: order.orderItems
        };

        return this.http.post<number>(this._baseUrl + 'api/order', body, {headers})
    }
}