import { User } from './../../models/user';
import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UserService {

    private baseURL: string;
    private _user: User;    

    set user(user: User){
        sessionStorage.setItem("authenticated-user", JSON.stringify(user));
        this._user = user;
    }

    get user(): User {
        let user_json = sessionStorage.getItem("authenticated-user");
        this._user = JSON.parse(user_json);
        return this._user;
    }

    public authenticatedUser(): boolean {
        return this._user != null && this._user.email != "" && this._user.password != "";
    }

    public cleanSession() {
        sessionStorage.setItem("authenticated-user", "");
        this._user = null;
    }

    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application-json');
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseURL = baseUrl;
    }

    public checkUser(user: User): Observable<User> {
        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body = {
            email: user.email,
            password: user.password
        };

        return this.http.post<User>(this.baseURL + "api/user/CheckUser", body, {headers})
    }

    public registerUser(user: User): Observable<User>{
        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body = {
            email: user.email,
            password: user.password,
            name: user.name,
            lastName: user.lastName
        };

        return this.http.post<User>(this.baseURL + "api/user", body, { headers });
    }

}

