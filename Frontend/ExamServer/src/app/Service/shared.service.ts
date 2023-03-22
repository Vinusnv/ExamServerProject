import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

   username:string;

  setUsername(username:any)
  {
    this.username=username;
  }

    getUsername()
    {
      return this.username;
    }
}
