import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getquestionofquizurl:string="http://localhost:9092/question/all"
  getquestionofquizurlfornormaluser:string="http://localhost:9092/question/quiz"
  createquestionurl:string="http://localhost:9092/question/create"
  deleteurl="http://localhost:9092/question/delete"
evalquizurl:string="http://localhost:9092/question/eval-quiz"


  constructor(private http:HttpClient) { }




  public getquestionofquiz(qid:any)
  {

    const params = new HttpParams().set('qid', qid)

    return this.http.get(`${this.getquestionofquizurl}`,{params})
  }



  public getquestionofquizfornormaluser(qid:any)
  {

    const params = new HttpParams().set('qid', qid)

    return this.http.get(`${this.getquestionofquizurlfornormaluser}`,{params})
  }


  
  public createQuestion(question:any)
  {
    return this.http.post(`${this.createquestionurl}`,question)
  }


  public deletequestion(quesid:any)
  {

    const params = new HttpParams().set('quesid', quesid)

    return this.http.delete(`${this.deleteurl}`,{params})
  }

  evalquiz(questions:any)
  {
    return this.http.post(`${this.evalquizurl}`,questions);
  }

}
