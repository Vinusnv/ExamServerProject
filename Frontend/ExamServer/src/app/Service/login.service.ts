import { Subject } from 'rxjs';
import { User } from 'src/app/model/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Global variables


  loginurl:string="http://localhost:9092/api/examserver/generate-token"
  currentloggedinuserapi="http://localhost:9092/api/examserver/current-user"



public loginStatusSubject=new Subject<boolean>();


  constructor(private http: HttpClient ) { }


  //genarate token

  public generateToken(loginData:any)
  {
    return  this.http.post(`${this.loginurl}`,loginData)
  }

  //fetch current loggedinuser

  public getCurrentLoggedinUser()
  {
    return this.http.get(`${this.currentloggedinuserapi}`)
  }
  
//logging user
public loginuser(token)
{
    localStorage.setItem("tokenkey",token)
   // this.loginStatusSubject.next(true);
    return true;
}

//user is logged in or not

public isLoggedin()
{
  let token=localStorage.getItem('tokenkey')
  if(token==undefined||token==null||token=='')
  {
    return false
  }
  else
  {
    return true;
  }
}


//Logout : Remove Token from the Local Storage

public logout()
{
   localStorage.removeItem('tokenkey')
   localStorage.removeItem('user')
   return true;
}

//Get token

public getToken()
{
  return localStorage.getItem('tokenkey')
}

//setting user to localstorage
public setUser(user)
{
  localStorage.setItem('user',JSON.stringify(user))
}


public getUser() {
  let user: any = localStorage.getItem('user');

  if (typeof user === 'string') {
    return JSON.parse(user);
  } else {
    this.logout();
    return null;
  }
}

public getUserrole() {
  let user: any = this.getUser();

  return user?.authorities[0]?.authority || null;
}

}
