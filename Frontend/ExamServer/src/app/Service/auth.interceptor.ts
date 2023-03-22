import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginservice:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

//add the jwt token (LocalStorage)  request

let authreq=request
const token=this.loginservice.getToken();
console.log(token)
if(token!=null)
{
  authreq=authreq.clone({setHeaders:{ Authorization:`Bearer ${token}`},
})
}
    return next.handle(authreq);
  }
}


export const authInterceptorProvider=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true,
  },
];
