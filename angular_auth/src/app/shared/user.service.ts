import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class userService {

    apiUrl ='http://localhost:4000/api/'; 

    constructor(private http: HttpClient) { }

    registerUser(data: any){
        console.log('RegisterData: ', data)
        return this.http.post(this.apiUrl + 'register', data);
    }

    loginUser(data:any){
        console.log('LoginUser: ', data )
        
    }
}