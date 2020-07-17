import { UserService } from './../../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../models/user';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {    
    public user;
    public authenticatedUser: boolean;
    public returnUrl: string;
    public message: string;
    public spinner: boolean;

    constructor(private router: Router, 
                private activatedRoute: ActivatedRoute,
                private userService: UserService){}

    ngOnInit(): void {
        this.user = new User();
        this.activatedRoute.queryParams.subscribe(queryParam => {
            this.setReturnUrl(queryParam['returnUrl']); 
        });
    }

    onSubmit(){
        this.spinner = true;
        this.userService.checkUser(this.user).subscribe(user => {
            //sessionStorage.setItem("authenticated-user", "1");
            this.userService.user = user;
            
            if(this.returnUrl == null){
                this.router.navigate(["/"]);
            } else {
                this.router.navigate([this.returnUrl]);
            }            
        },
        error => {
            console.log(error)
            this.message = error.error;
            this.spinner = false;
        });
    }

    setReturnUrl(queryParam){        
        this.returnUrl = (queryParam != undefined) ? queryParam : '/';
    }
}