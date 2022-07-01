// import {  HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable, Injector } from '@angular/core';
// import { userService } from './user.service';


// @Injectable()
// export class InterceptorService implements HttpInterceptor {

//   // constructor( private injector: Injector) { }
//   constructor( private service: userService) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler) {

//       const authToken = this.apiService.getToken();

//       const tokenReq = req.clone({
//         headers: req.headers.set('Authorization', 'Bearer ' + authToken)
//       });
//       return next.handle(tokenReq);
//   }
// }