import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryurl:string="http://localhost:9092/category/all"
  createurl="http://localhost:9092/category/create"
  deletecategoryurl="http://localhost:9092/category/deletebytitle"
  constructor(private http:HttpClient) { }

//load all the categories
public categories()
{
  return this.http.get(`${this.categoryurl}`);
}

//create category

public createcategory(data)
{
   return this.http.post(`${this.createurl}`,data);
}

public delete(data:any)
{
  const params=new HttpParams().set("title",data)
  return this.http.delete(`${this.deletecategoryurl}`,{params})
}

}
