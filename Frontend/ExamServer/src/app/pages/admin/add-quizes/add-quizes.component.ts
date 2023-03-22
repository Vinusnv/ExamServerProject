import { QuizService } from './../../../Service/quiz.service';

import { CategoryService } from './../../../Service/category.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizes',
  templateUrl: './add-quizes.component.html',
  styleUrls: ['./add-quizes.component.css']
})
export class AddQuizesComponent implements OnInit {

quizData:any={

  title:'',
  description:'',
  marks:'',
  numberofQuestions:'',
  active:true,
  category:{
    cid:'',
    }

}

  constructor(private category:CategoryService,private quiz:QuizService)
  {}

  ngOnInit(): void {
    this.category.categories().subscribe((data)=>{
     

   console.log("Checking categories",data)
   this.categories=data;

    },(error)=>{

      Swal.fire('Error !!','Backend Server Error','error');
    })




  }


  categories:any=[

  ]

  quizform()
  {
    this.quiz.createquiz(this.quizData).subscribe((data)=>{

      Swal.fire('Success','Quiz Created Successfully','success')   
      
      
      console.log("hello vinay i am here",data)

         //clearing data once the after the success
  this.quizData.title=''
  this.quizData.description=''
  this.quizData.marks=''
  this.quizData.numberofQuestions=''
  this.quizData.active=false
  this.quizData.category.cid='';
  // 

    },(error)=>{

      Swal.fire('Error !!','Backend Server Error','error')
    })

    console.log("Checking form object",this.quizData)
  }

}
