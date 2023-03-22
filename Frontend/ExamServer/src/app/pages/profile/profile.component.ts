import { LoginService } from './../../Service/login.service';
import { SharedService } from './../../Service/shared.service';
import { ExamService } from './../../Service/exam.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

user:any;
constructor(private login:LoginService)
{
  
}
  ngOnInit(): void {
    this.user=this.login.getUser()
  
  }

  showprofile()
  {
   this.user=this.login.getCurrentLoggedinUser();
  }

  UpdateUser()
  {
    console.log("Update button FileReader....")
    console.log(this.user.phone)
  }


}
