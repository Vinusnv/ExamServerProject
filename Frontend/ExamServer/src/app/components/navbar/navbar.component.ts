import { LoginService } from './../../Service/login.service';
import { SharedService } from './../../Service/shared.service';
import { ExamService } from './../../Service/exam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

isLoggedin=false;
user=null;

  constructor(public login: LoginService){}
    
  

  ngOnInit(): void {
    
  this.isLoggedin=this.login.isLoggedin() 
  this.user=this.login.getUser();

  this.login.loginStatusSubject.asObservable().subscribe(data=>{
    this.isLoggedin=this.login.isLoggedin() 
    this.user=this.login.getUser();
  })
  }

  logout()
  {
    this.login.logout();
   window.location.reload();
  //  this.login.loginStatusSubject.next(false);
  }

}

