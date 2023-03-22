import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from './../../../Service/category.service';

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category = {
    title: '',
    description: '',
  }

  constructor(private categoryservice: CategoryService, private snack: MatSnackBar) {

  }
  ngOnInit(): void {


  }

  onaddcategory() {

    if (this.category.title.trim() == null || this.category.title == "") {

      // alert("Usename Required")
      this.snack.open('Title Required', 'ok', {
        duration: 2000
      });
      return
    }


    this.categoryservice.createcategory(this.category).subscribe((data) => {

      console.log(data);
      this.category.title=''
      this.category.description=''
      Swal.fire(  ' Category Added', 'Success', 'success');
      
    },(err)=>{

      console.log("Server Error")
      Swal.fire(  'Error !!', 'Server Error', 'error');
    })


  }


}
