import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  aryaList = ["Goeffrey"]

  getsAryaList() {
    return this.aryaList;
  }

  addName(name:string) {
    console.log("I'm here")
    this.aryaList.push(name)
  }
  
}
