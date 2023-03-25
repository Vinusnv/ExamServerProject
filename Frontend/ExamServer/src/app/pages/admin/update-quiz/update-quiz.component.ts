import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Service/category.service';
import { QuizService } from 'src/app/Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  qId = 0;
  quizData=null
  categories: any = [

  ]

  constructor(private category: CategoryService, private quiz: QuizService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    //Fetching id from the activated route concept from the view quiz component
    this.qId = this.route.snapshot.params['qid'];
    console.log("The Id received is", this.qId)
    //fetching quiz from the backend
    this.quiz.fetchquiz(this.qId).subscribe((data) => {
      console.log("The User received is ", data)

      this.quizData = data;
      console.log("The User quiztobeupdated is ", this.quizData)

    })
//Fetching category

this.category.categories().subscribe((data)=>{

  this.categories=data
},(error)=>{
  console.log("error in loading categories")
})

  }




  quizform() {

    Swal.fire(
      {
        title:"Are you Sure",
        confirmButtonText:'Update',
        showCancelButton:true,
    
      }
    ).then((result)=>{
      if(result.isConfirmed)
      {
        this.quiz.updatequiz(this.quizData).subscribe((data)=>{

          console.log("Updated Quiz is",data)
        })

        Swal.fire("Success",'Quiz Updated','success')

        this.router.navigate(['/admin/quizes'])
      }
    })
     
  }




}








