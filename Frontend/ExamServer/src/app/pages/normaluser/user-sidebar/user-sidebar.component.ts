import { CategoryService } from './../../../Service/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {



  Categories:any;
  constructor( private category:CategoryService){

  }

  ngOnInit(): void {
       this.category.categories().subscribe((data)=>{

        console.log(data)
        this.Categories=data;
       })
  }

}
