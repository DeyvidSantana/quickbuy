import { UserService } from './../services/user/user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private router: Router,
    private userService: UserService){

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

  exit(){
    this.userService.cleanSession();
    this.router.navigate(['/login']);
  }

  get user(){
    return this.userService.user;
  }
}
