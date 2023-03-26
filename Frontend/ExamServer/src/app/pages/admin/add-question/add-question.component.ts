
import { QuestionService } from './../../../Service/question.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

 
qId
qtitle
question={
  quiz:{
    qid:''

  },
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:''
};

  constructor(private aroute:ActivatedRoute,private questionservice:QuestionService){}


  ngOnInit(): void {
   
    this.qId=this.aroute.snapshot.params['qid'];
    this.qtitle=this.aroute.snapshot.params['title']
    console.log("checking",this.qId)
    console.log("checking the title here",this.qtitle)
     this.question.quiz['qid']=this.qId;

  }



   createquestion()
  {  

   this.questionservice.createQuestion(this.question).subscribe((data)=>{
    console.log("success ",data)

    Swal.fire("Success","Question added Successfully",'success')
   })
    
  }

}
