import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dorne',
  templateUrl: './dorne.component.html',
  styleUrls: ['./dorne.component.scss']
})
export class DorneComponent implements OnInit {

  constructor(private message: MessageService, private data:DataService) { }
  
  aryaList: string[];
  newName: string;
  gotData: {};

  ngOnInit() {
    this.aryaList = this.message.getsAryaList();
    this.loadData();
  }

  loadData() {
    this.data.getData("dorne").subscribe(payload => {
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

}
