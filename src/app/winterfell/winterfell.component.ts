import { Component, OnInit } from '@angular/core';
import {RegionServiceService} from '../region-service.service';
import {MessageService} from '../message.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-winterfell',
  templateUrl: './winterfell.component.html',
  styleUrls: ['./winterfell.component.scss']
})
export class WinterfellComponent implements OnInit {

  constructor(private reggie: RegionServiceService, private message: MessageService, private data: DataService) { }

  region_data:{};
  my_data:string;
  aryaList:string[];
  newName:string;

  ngOnInit() {
    this.region_data = this.reggie.getRegions();
    this.my_data = this.region_data["winterfell"];
    this.aryaList = this.message.getsAryaList();
  }

  setName(e:any) {
    this.newName = e.target.value
    console.log("it worked")
  }

  sendName() {
    this.message.addName(this.newName)
  }

}
