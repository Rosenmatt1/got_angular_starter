import { Component, OnInit } from '@angular/core';
import { RegionServiceService } from '../region-service.service';
import { MessageService } from '../message.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-winterfell',
  templateUrl: './winterfell.component.html',
  styleUrls: ['./winterfell.component.scss']
})
export class WinterfellComponent implements OnInit {

  constructor(private reggie: RegionServiceService, private message: MessageService, private data: DataService) { }

  aryaList: string[];
  newName: string;
  gotData: {};
  nameToDelete:string;

  ngOnInit() {
    
    this.aryaList = this.message.getsAryaList();
    this.loadData();
  }

  loadData() {
    this.data.getData("winterfell").subscribe(payload => {
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
    this.nameToDelete = e.target.parentNode.childNodes[1].data
  }

  sendNameToDelete() {
    this.message.removeFromList(this.nameToDelete)
    this.aryaList = this.message.getsAryaList()
  }

}
