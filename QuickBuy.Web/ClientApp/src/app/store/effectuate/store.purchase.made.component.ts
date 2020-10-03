import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: "./store.purchase.made.component.html"
})
export class StorePurchaseMadeComponent implements OnInit {

    public orderId: string;

    ngOnInit(): void {
        this.orderId = sessionStorage.getItem("orderId");
    }

}