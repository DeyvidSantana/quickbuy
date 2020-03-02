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

    constructor(){
        this.user = new User();
    }

    onSubmit(){
        if(this.user.email == "sdsdeyvidh@hotmail.com" &&
            this.user.password == "nascimento"){
                this.authenticatedUser = true;
            }

        console.log("E-mail: " + this.user.email + "\nPassword: " + this.user.password);
    }
}