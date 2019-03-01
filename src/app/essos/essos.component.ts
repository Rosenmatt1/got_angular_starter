import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-essos',
  templateUrl: './essos.component.html',
  styleUrls: ['./essos.component.scss']
})
export class EssosComponent implements OnInit {

  constructor(private data: DataService, private message: MessageService) { }

  aryaList: string[];
  newName: string;
  gotData: {};

  ngOnInit() {
    this.aryaList = this.message.getsAryaList();
    this.loadData()
  }

  image_path: string = 'assets/images/essos.jpg';

  loadData() {
    this.data.getData("essos").subscribe(payload => {
      this.gotData = payload
      console.log(payload)
    })
  }

  setName(e: any) {
    this.newName = e.target.value
    console.log(this.newName)
  }

  sendName() {
    this.message.addName(this.newName)
  }

  selectNameToDelete(e) {
    this.message.removeFromList(e.target.parentNode.childNodes[1].data)
  }

}
