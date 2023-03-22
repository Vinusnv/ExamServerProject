import { LoginService } from './../../../Service/login.service';
import { CategoryService } from './../../../Service/category.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  categories:any= []
  //Access Control
  access:String[]=["Vinay","Nikhil","Vijeth"]
  constructor(
    private category:CategoryService,
    private login:LoginService,
    ) { }
  ngOnInit(): void {
  
this.category.categories().subscribe((data:any)=>{

  console.log(data)

  this.categories=data;
  console.log(this.categories)
 
},(err)=>{

  console.log("Server Error")
  Swal.fire(  'Error !!', 'Server Error', 'error');
})
 }



 

checkuser:any='';
 deleteCategory(title: string): void {

 this.login.getCurrentLoggedinUser().subscribe((data)=>{
  this.checkuser=data;
  console.log("checking current user",this.checkuser.firstname)

  if( this.access.includes( this.checkuser.firstname))
  {
   this.category.delete(title).subscribe(data=>{
     const index = this.categories.findIndex(c => c.title === title);
   if (index !== -1) {
    this.categories.splice(index, 1);
 
   }
   Swal.fire('Success', 'Category deleted successfully', 'success');
 },(err)=>{
 
   Swal.fire('Error !!', 'Server Error', 'error');
 })
  }
  else
  {
   Swal.fire('Access Denied','Hi ' +this.checkuser.firstname+' You Dont have Access to Delete Categories Thank You..', 'error');
  }
 })

//  if(this.checkuser.firstname==="Vinay")
//  {
//   this.category.delete(title).subscribe(data=>{
//     const index = this.categories.findIndex(c => c.title === title);
//   if (index !== -1) {
//    this.categories.splice(index, 1);

//   }
//   Swal.fire('Success', 'Category deleted successfully', 'success');
// },(err)=>{

//   Swal.fire('Error !!', 'Server Error', 'error');
// })
//  }
//  else
//  {
//   Swal.fire('Access Denied','You Dont have Access To Delete check your Roles Thank You..', 'error');
//  }
  


}
 

}



// deleteCategory(title: string): void {
  
//   this.category.delete(title).subscribe(data=>{
//     const index = this.categories.findIndex(c => c.title === title);
//   if (index !== -1) {
//    this.categories.splice(index, 1);

//   }
//   Swal.fire('Success', 'Category deleted successfully', 'success');
// },(err)=>{

//   Swal.fire('Error !!', 'Server Error', 'error');
// })

// }