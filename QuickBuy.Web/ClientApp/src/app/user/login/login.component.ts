import { Router } from '@angular/router';
import { User } from './../../models/user';
import { Component } from "@angular/core";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    public user;
    public authenticatedUser: boolean;

    constructor(private router: Router){
        this.user = new User();
    }

    onSubmit(){
        if(this.user.email == "sdsdeyvidh@hotmail.com" &&
            this.user.password == "nascimento"){
                localStorage.setItem("authenticated-user","1");
                this.router.navigate(['/']);
                this.authenticatedUser = true;
            }
    }
}