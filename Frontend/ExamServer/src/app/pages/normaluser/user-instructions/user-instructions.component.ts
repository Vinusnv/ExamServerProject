
import { QuizService } from 'src/app/Service/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-instructions',
  templateUrl: './user-instructions.component.html',
  styleUrls: ['./user-instructions.component.css']
})
export class UserInstructionsComponent implements OnInit {


  //Global Variables to hold data

  qid:any='';
  quiz:any='';
  time:any='';
  marksofeachquestion:any=''

constructor(
  private aroute:ActivatedRoute,
 private route:Router,
  private quizservice:QuizService
  
  )

{

}
  ngOnInit(): void {

  this.qid=this.aroute.snapshot.params['qid']
  console.log("The quiz id received from the quiz upon clicking start is ",this.qid) 

  this.quizservice.fetchquiz(this.qid).subscribe((data)=>{
    console.log("The Active Quiz Received is " ,data)

this.quiz=data;

this.time=Number(this.quiz.numberofQuestions)*2

this.marksofeachquestion=Number(this.quiz.marks/this.quiz.numberofQuestions);
  

  },(error)=>{

    alert("Error Occured")
  })
    
  }


  public startquiz()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Start the Quiz",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Start'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.route.navigate(['/start/'+this.quiz.qid ]);
      }
    })
  }


}
