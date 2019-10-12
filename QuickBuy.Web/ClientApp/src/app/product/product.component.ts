import { Component } from "@angular/core";

@Component({
  selector: "product",
  template: "<html><body>{{ getName() }}</body></html>"
})
export class ProductComponent {
  
  public name: string;
  public price: number;

  public getName(): string {
    return "The app is working!";
  }

}
