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
  
}
