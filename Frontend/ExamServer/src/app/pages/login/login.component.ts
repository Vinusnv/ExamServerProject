
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './../../Service/login.service';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//Global Variables
loginForm:FormGroup;
showPassword = false;
constructor(private formbuilder:FormBuilder,private loginservice:LoginService,private snack:MatSnackBar,private route:Router)
{

}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username:['', Validators.required],
      password:  ['', Validators.required],
     
    });

  }

  login()
  {
    if(this.loginForm.value.username==null||this.loginForm.value.username=="")
    {
     
   // alert("Usename Required")
   this.snack.open('Username Required', 'ok', {
    duration: 2000
  });
    }
    if(this.loginForm.value.password==null||this.loginForm.value.password=="")
    {
        // alert("Usename Required")
   this.snack.open('Password Required', 'ok', {
    duration: 2000
  });
    }

//Genarating the token
const formdata=this.loginForm.value
this.loginservice.generateToken(formdata).subscribe((data:any)=>{
console.log("Generated Token" ,data)


 //SET TOKEN :Storing Token in Local Storage
 this.loginservice.loginuser(data.token)

 //Fetching user fron the backend
 this.loginservice.getCurrentLoggedinUser().subscribe((user:any)=>{
 console.log("checking user here",user)
 //SET USER :Storing the current logged in user in localstorage
this.loginservice.setUser(user)



//Checking if the user is normal user or admin user

const role=this.loginservice.getUserrole()

if(role=="ADMIN")
{

  this.route.navigate(['admin'])
  this.loginservice.loginStatusSubject.next(true);
  
}
else if(role=="NORMAL")
{

  this.route.navigate(['normal/0'])
 this.loginservice.loginStatusSubject.next(true);
}
else
{
  this.loginservice.logout()
}

 })



},(error)=>{
  console.log(error)
  console.log("Token Generation UnSuccessful")

  Swal.fire("Try Again ", 'Server Error..', 'error');
})

  }

  resetForm()
  {
    this.loginForm.reset();
  }


}
