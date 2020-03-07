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

    constructor(private router: Router, private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        this.user = new User();
        this.activatedRoute.queryParams.subscribe(queryParam => {
            this.setReturnUrl(queryParam['returnUrl']); 
        });
    }

    onSubmit(){
        if(this.user.email == "sdsdeyvidh@hotmail.com" &&
            this.user.password == "nascimento"){
                sessionStorage.setItem("authenticated-user","1");
                this.router.navigate([this.returnUrl]);
                this.authenticatedUser = true;
            }
    }

    setReturnUrl(queryParam){        
        this.returnUrl = (queryParam != undefined) ? queryParam : '/';
    }
}