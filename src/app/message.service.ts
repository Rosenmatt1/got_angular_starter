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
    this.aryaList.push(name)
  }

  removeFromList(selectedName:string) {
    let cutName = selectedName.substring(1, selectedName.length - 1)
    let aryaListWithRemoved = this.aryaList.filter(name => name !== cutName)
    this.aryaList = aryaListWithRemoved
  }
  
  
}
