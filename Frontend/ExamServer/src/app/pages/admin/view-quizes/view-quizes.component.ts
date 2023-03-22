import { LoginService } from './../../../Service/login.service';

import { QuizService } from './../../../Service/quiz.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {


  authorities = ["Vinay", "Nikhil", "Vijeth"]

  constructor(private quiz: QuizService, private login: LoginService) {

  }
  checkeduser: any = ''
  quizes: any = []

  ngOnInit(): void {


    this.quiz.fetchquizes().subscribe((data) => {

      this.quizes = data;


    }, (error) => {

      console.log(error)
      Swal.fire('Error !!', 'Backend Server Error', 'error');
    })

    //checking user acces to delete

    this.login.getCurrentLoggedinUser().subscribe((data) => {

      this.checkeduser = data;
    })

  }


  deletequiz(qid) {
    if (this.authorities.includes(this.checkeduser.firstname)) {

    Swal.fire(
      {
        title:"Are you Sure",
        confirmButtonText:'Delete',
        showCancelButton:true,

      }
    ).then((result)=>{
      if(result.isConfirmed)
      {
        this.deletequizwithquthority(qid)
      }
    })

    //  this.deletequizwithquthority(qid)
    }
    else {
      Swal.fire('Access Denied', 'Hi ' + this.checkeduser.firstname + ' You Dont have Access to Delete Quiz Thank You..', 'error');
    }
  }


  deletequizwithquthority(qid) {
    this.quiz.deletequiz(qid).subscribe((data) => {

      this.quizes = this.quizes.filter((quiz) => quiz.qid != qid);
      Swal.fire('Success', 'Question Deleated Successfully', 'success')
    }, (error) => {

      Swal.fire('Error', 'Question Not Deleated ', 'error')
    })
  }

}