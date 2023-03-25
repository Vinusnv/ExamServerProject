import { LoginService } from './../../../Service/login.service';

import { QuestionService } from './../../../Service/question.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewquiz-question',
  templateUrl: './viewquiz-question.component.html',
  styleUrls: ['./viewquiz-question.component.css']
})
export class ViewquizQuestionComponent implements OnInit{

  authorities = ["Vinay", "Nikhil", "Vijeth"]
  checkuser:any=''
//pdefining variables to set params receiving from the view quiz component component link
 qId;  
 qtitle; 
 questions:any=[]; 


constructor(private route:ActivatedRoute,private question:QuestionService,private login:LoginService){}

  ngOnInit(): void {



    //Fetching the user for checking their authority
     this.login.getCurrentLoggedinUser().subscribe((data)=>{

      this.checkuser=data;
      
     })

   
  this.qId=this.route.snapshot.params['qid'];
  this.qtitle=this.route.snapshot.params['title']

  console.log(this.qId)
  console.log(this.qtitle)

  this.question.getquestionofquiz(this.qId).subscribe((data)=>{

  console.log("questions received from the qid is ",data)
  this.questions=data;

  if(this.questions.length==0)
  {
    Swal.fire("Add Questions",'This Quiz Has No Questions','warning')
  }

  })

  }


  deletequestion(quesId) {
    if (this.authorities.includes(this.checkuser.firstname)) {

    Swal.fire(
      {
        title:"Are you Sure",
        confirmButtonText:'Delete',
        showCancelButton:true,

      }
    ).then((result)=>{
      if(result.isConfirmed)
      {
        this.deletequestionwithauthority(quesId)
       
      }
    })

    //  this.deletequizwithquthority(qid)
    }
    else {
      Swal.fire('Access Denied', 'Hi ' + this.checkuser.firstname + ' You Dont have Access to Delete Question Thank You..', 'error');
    }
  }



  deletequestionwithauthority(quesId:any)   //this id is a question id from the template we are setting
{
      this.question.deletequestion(quesId).subscribe((data)=>{

        console.log("Deleted Successfully")
        this.questions=this.questions.filter((q)=>q.quesId!=quesId)
      },(error)=>{

        alert("Error in deleting")
      }) 
}




}
