import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'
import { DataService } from '../data.service';

@Component({
  selector: 'app-dorne',
  templateUrl: './dorne.component.html',
  styleUrls: ['./dorne.component.scss']
})
export class DorneComponent implements OnInit {

  constructor(private reg: MessageService, private data:DataService) { }
  
  aryaList: string[];
  gotData:{};

  ngOnInit() {
    this.aryaList = this.reg.getsAryaList();
    this.loadData();
  }

  loadData() {
    this.data.getData("winterfell").subscribe(payload => {
      this.gotData = payload
      console.log(payload)
    })
  }


}
