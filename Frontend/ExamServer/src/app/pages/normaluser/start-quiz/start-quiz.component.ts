import { QuestionService } from './../../../Service/question.service';
import { ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  qid: any = '';
  questions:any='';

  marksGot: any = 0;
  correctAnswer: any = 0;
  attempted: any = 0;

  constructor(
    private locationst: LocationStrategy,
    private aroute: ActivatedRoute,
    private questionservice: QuestionService
  ) { }

  ngOnInit(): void {
    this.preventbackbutton();

    this.qid = this.aroute.snapshot.params['qid'];
    console.log(this.qid);

    this.loadQuestions()
  }


  preventbackbutton() {
    history.pushState(null, null, location.href);
    this.locationst.onPopState(() => {
      history.pushState(null, null, location.href);
    });
  }

  loadQuestions() {
    this.questionservice.getquestionofquiz(this.qid).subscribe((data) => {
      this.questions = data;

      this.questions.forEach(data => {
        data['givenAnswer'] = ''
      })
      console.log(this.questions)
    }, (error) => {
      Swal.fire('Server Error', 'Sorry for the inconvenience caused', 'error');
    });

  }

  submitquiz() {

    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Submit  Quiz",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit'
    }).then((result) => {
      if (result.isConfirmed) {
        
         this.questions.forEach(q=>{

           if(q.givenAnswer==q.answer)
           {
               this.correctAnswer++
               let marksofeachquestion=this.questions[0].quiz.marks/this.questions.length
               this.marksGot +=marksofeachquestion
           }


         })
      }

      console.log("correct Answers",this.correctAnswer)
    })
   
  }


}
