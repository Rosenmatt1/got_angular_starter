import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-braavos',
  templateUrl: './braavos.component.html',
  styleUrls: ['./braavos.component.scss']
})
export class BraavosComponent implements OnInit {

  constructor(private data: DataService, private message: MessageService) { }

  aryaList: string[];
  newName: string;
  gotData: {};
  nameToDelete: string;

  ngOnInit() {

    this.aryaList = this.message.getsAryaList();
    this.loadData();
  }

  image_path:string = 'assets/images/braavos.png';

  loadData() {
    this.data.getData("braavos").subscribe(payload => {
      this.gotData = payload
      console.log(payload)
    })
  }

  setName(e: any) {
    this.newName = e.target.value
    console.log(this.newName)
  }

  selectNameToDelete(e) {
    this.nameToDelete = e.target.parentNode.childNodes[1].data
  }

  sendNameToDelete() {
    this.message.removeFromList(this.nameToDelete)
    this.aryaList = this.message.getsAryaList()
  }

}
