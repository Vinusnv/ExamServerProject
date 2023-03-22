
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

  
//pdefining variables to set params receiving from the view quiz component component link
 qId;
 qtitle; 
 questions:any=[]; 


constructor(private route:ActivatedRoute,private question:QuestionService){}

  ngOnInit(): void {
   
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

}
