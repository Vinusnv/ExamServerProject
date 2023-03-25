
import { QuizService } from 'src/app/Service/quiz.service';
import { CategoryService } from 'src/app/Service/category.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loadquiz',
  templateUrl: './loadquiz.component.html',
  styleUrls: ['./loadquiz.component.css']
})
export class LoadquizComponent implements OnInit{
  cId;
  quizes:any=[];
  category:any;
  constructor(
    private aroute:ActivatedRoute,
    private quizservice:QuizService,
    private categoryservice:CategoryService
    )
  {}


  ngOnInit(): void {


    //Fetching category for displaying the proper error message


           
    this.aroute.params.subscribe((data)=>{

      console.log("checking params",data)

      this.cId=data['cId'];
   console.log("Checking cid from router link", this.cId)
  

      if(this.cId==0)
      {
        this.quizservice.fetchquizes().subscribe((data)=>{
          this.quizes=data
           
        },(error)=>{
  
          alert("Error Coccured")
        })
      }
      else{
           console.log("cid before",this.cId)

        this.quizservice.fetchquizesofcategory(this.cId).subscribe((data)=>{
          this.quizes=data
            if(this.quizes.length!=0)
            {
                console.log("Success") 
            }
            else{
                    this.categoryservice.fetchcategory(this.cId).subscribe(data=>{
                           this.category=data
                      Swal.fire("Error",'Category ' +this.category.title+'has no quizes Yet..','error')
                    })
             
            }

        },(error)=>{
  
          alert("Error Coccured")
        })
       
      }
    })

}

}