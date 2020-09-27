import { StoreBuyCart } from './../store/buy-cart/store.buy.cart';
import { UserService } from './../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isExpanded = false;
  public storeBuyCart: StoreBuyCart;

  constructor(private router: Router,
    private userService: UserService){

  }

  ngOnInit(): void {
    this.storeBuyCart = new StoreBuyCart();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public loggedUser(): boolean {
    return this.userService.authenticatedUser();
  }

  public userAdministrator(): boolean {
    return this.userService.userAdministrator();
  }

  exit(){
    this.userService.cleanSession();
    this.router.navigate(['/login']);
  }

  get user(){
    return this.userService.user;
  }

  public anyItemsBuyCart(): boolean{
    return this.storeBuyCart.anyItemsBuyCart();
  }
}
