import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthData } from "./user.model";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class userService {
    token: any;

    apiUrl ='http://localhost:4000/api/'; 

    constructor(
        private http: HttpClient,
        private router: Router,
        ) { }

    registerUser(data: any){
        // console.log('RegisterData: ', data)

        const authData: AuthData = {
            fullName: data.fullName,
            email: data.email,
            password: data.password
        }
        this.http.post(this.apiUrl + 'register', authData).subscribe(res =>{
            console.log('responseRegister: ', res )
            this.router.navigate(['login']);
        })
    }

    loginUser(data:any){
        // console.log('LoginUser: ', data )
        this.http.post<{token: string}>(this.apiUrl + 'login', data).subscribe(response => {
            
            const token = response.token;
            this.token = token;
            if(this.token){
                this.router.navigate(['home']);
            }
        })
        
    }

    getToken(){
        return this.token;
    }
}