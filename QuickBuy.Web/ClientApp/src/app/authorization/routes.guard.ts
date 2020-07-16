import { UserService } from './../services/user/user.service';
import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class RoutesGuard implements CanActivate {

    constructor(private router: Router,
                private userService: UserService){
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        
        if(this.userService.authenticatedUser()){
            return true;
        }
        this.router.navigate(['/login'], { queryParams: {returnUrl:state.url}});        
        return false;
    }

}