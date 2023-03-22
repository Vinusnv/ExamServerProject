import { LogCred } from './../model/LogCred';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../model/User';

;

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  usermessage:String;
  userstatus:boolean;

  private username:any;

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

  posturl:string="http://localhost:9092/api/examserver/create"

  loginurl:string="http://localhost:9092/api/examserver/login"

  getuser:string="http://localhost:9092/api/examserver/singleuser"


  //Register api  call
  RegisterUser(user:User): Observable<User> {
    console.log(`The user Recived id ${user}`);
    return this.http.post<User>(`${this.posturl}`, user);
  }

  //login api  call
  LoginUser(logg:LogCred): Observable<LogCred> {
    console.log(`The user Recived id ${logg}`);
    return this.http.post<LogCred>(`${this.loginurl}`, logg);
  }

    //Fetch  api  call
    FetchUser(param:string): Observable<User> {

      const params=new HttpParams().set('username',param)
     // console.log(`The user Recived is ${user}`);
      return this.http.get<User>(`${this.getuser}`,{params});
    }


    setData(username:any)
    {
      this.username=username;
    }

      getUsername()
      {
        return this.username;
      }

}
