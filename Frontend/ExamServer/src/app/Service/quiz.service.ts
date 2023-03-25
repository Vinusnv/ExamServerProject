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

  constructor(private http: HttpClient) { }

  public fetchquizes() {
    return this.http.get(`${this.getquizesurl}`);
  }

  public fetchquiz(data: any) {
    const params = new HttpParams().set('qid', data)
    return this.http.get(`${this.getquizurl}`, { params });
  }

  public fetchquizesofcategory(cid:any)
  {
    const params = new HttpParams().set('cid', cid)
    return this.http.get(`${this.getquizofcategoryurl}`, { params });
  }


  public createquiz(data: any) {
    return this.http.post(`${this.createquizurl}`, data);
  }


  public updatequiz(data: any) {
    return this.http.put(`${this.updatequizurl}`, data);
  }

  public deletequiz(data: any) {
    const params = new HttpParams().set('qid', data)
    return this.http.delete(`${this.deletequizurl}`, { params });
  }



}
