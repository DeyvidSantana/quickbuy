import { UserService } from './../../services/user/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "register-user",
    templateUrl: "./register.user.component.html",
    styleUrls: ["./register.user.component.css"]
})
export class RegisterUserComponent implements OnInit{
    
    public user: User;
    public active_spinner: boolean;
    public message: string;
    public registeredUser: boolean;

    constructor(private userService: UserService){

    }

    ngOnInit(): void {
        this.user = new User();
    }

    public register(){
        this.active_spinner = true;
        this.userService.registerUser(this.user)
            .subscribe(
                user => {
                    this.registeredUser = true;
                    this.message = "";
                    this.active_spinner = false;
                },
                e => {
                    this.message = e.error;
                }
            );

    }

}