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
    console.log("selectedName", selectedName.substring(1, selectedName.length -1).length)
    let aryaListWithRemoved = this.aryaList.filter(name => name !== selectedName)
    this.aryaList = aryaListWithRemoved
  }
  
  
}
