import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class RoutesGuard implements CanActivate {

    constructor(private router: Router){
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        var autenticated = sessionStorage.getItem("authenticated-user");
        if(autenticated == "1"){
            return true;
        }
        this.router.navigate(['/login'], { queryParams: {returnUrl:state.url}});        
        return false;
    }

}