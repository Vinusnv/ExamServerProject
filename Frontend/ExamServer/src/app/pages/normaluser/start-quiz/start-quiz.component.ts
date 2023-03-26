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
  isSubmit:boolean=false;
  timer:any;

  constructor(
    private locationst: LocationStrategy,
    private aroute: ActivatedRoute,
    private questionservice: QuestionService
  ) { }

  ngOnInit(): void {
    this.preventbackbutton();
    this.qid = this.aroute.snapshot.params['qid'];
    this.loadQuestions()
  }


  preventbackbutton() {
    history.pushState(null, null, location.href);
    this.locationst.onPopState(() => {
      history.pushState(null, null, location.href);
    });
  }

  loadQuestions() {
    this.questionservice.getquestionofquizfornormaluser(this.qid).subscribe((data) => {
      this.questions = data;
        console.log(this.questions)
      this.timer=this.questions.length*2*60;
      this.starttimer();
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
         this.evaluatequiz()
        console.log(this.questions)
      }
    })
   
  }

  starttimer()
  {
   let t= window.setInterval(()=>{
      if(this.timer<=0)
      { 
        this.evaluatequiz();
        clearInterval(t)
      }else{
        this.timer--;
      }
    },1000)
  }


  getFormatedtime()
  {
    let mm=Math.floor(this.timer/60)
    let ss=this.timer-mm*60;
    return `${mm} min : ${ss} sec`
  }

  evaluatequiz()
  {
  this.questionservice.evalquiz(this.questions).subscribe((data)=>{
     this.marksGot=parseFloat(Number(data['marksGot']).toFixed(2));
     this.correctAnswer=data['correctAnswer']
     this.attempted=data['attempted']

  })

  this.isSubmit=true;
//Call server to Evaluate Quiz

//Front End Side Evaluation


    // 
    // this.questions.forEach(q=>{

    //   if(q.givenAnswer==q.answer)
    //   {
    //       this.correctAnswer++
    //       let marksofeachquestion=this.questions[0].quiz.marks/this.questions.length
    //       this.marksGot +=marksofeachquestion

    //       console.log("marks of each question",marksofeachquestion)
    //   }

    //   if(q.givenAnswer.trim()!='')
    //   {
    //    this.attempted++;
    //   }


    // })     
  }


  printResult()
  {
    window.print();
  }


}
