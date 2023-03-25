import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  getquizesurl: string = "http://localhost:9092/quiz/all"

  getquizurl: string = "http://localhost:9092/quiz/single"

  getquizofcategoryurl:string="http://localhost:9092/quiz/category"

  createquizurl: string = "http://localhost:9092/quiz/create"

  deletequizurl: string = "http://localhost:9092/quiz/delete"

   updatequizurl: string = "http://localhost:9092/quiz/update"

   activequizurl:string="http://localhost:9092/quiz/active"

   activequizesofcategoryurl:string="http://localhost:9092/quiz/activequizcategory"

  constructor(private http: HttpClient) { }


  //Fetch All Quizes
  public fetchquizes() {
    return this.http.get(`${this.getquizesurl}`);
  }
//fetch Quiz by quiz id
  public fetchquiz(data: any) {
    const params = new HttpParams().set('qid', data)
    return this.http.get(`${this.getquizurl}`, { params });
  }
//Fetch Quizes of Category
  public fetchquizesofcategory(cid:any)
  {
    const params = new HttpParams().set('cid', cid)
    return this.http.get(`${this.getquizofcategoryurl}`, { params });
  }

//Create Quizes
  public createquiz(data: any) {
    return this.http.post(`${this.createquizurl}`, data);
  }

//Update Quizes
  public updatequiz(data: any) {
    return this.http.put(`${this.updatequizurl}`, data);
  }


  //Delete Quizes
  public deletequiz(data: any) {
    const params = new HttpParams().set('qid', data)
    return this.http.delete(`${this.deletequizurl}`, { params });
  }
//Fetch All Active Quizes 
public activequizes()
{
  return this.http.get(`${this.activequizurl}`);
}

//Fetch Active quizes of Category
public activequizesofcategory(cid:any)
{
  const params = new HttpParams().set('cid', cid)
  return this.http.get(`${this.activequizesofcategoryurl}`, { params });
}

}
