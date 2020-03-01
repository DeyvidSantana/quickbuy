import { User } from './../../models/user';
import { Component } from "@angular/core";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    public user;

    constructor(){
        this.user = new User();
    }

    onSubmit(){
        console.log("E-mail: " + this.user.email + "\nPassword: " + this.user.password);
    }
}