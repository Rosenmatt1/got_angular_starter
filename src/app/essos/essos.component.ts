import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-essos',
  templateUrl: './essos.component.html',
  styleUrls: ['./essos.component.scss']
})
export class EssosComponent implements OnInit {

  constructor(private data:DataService) { }

  gotData:{}

  ngOnInit() {
    this.loadData()
  }

  image_path: string = 'assets/images/essos.jpg';

  loadData() {
    this.data.getData("essos").subscribe(payload => {
      this.gotData = payload
      console.log(payload)
    })
  }

}
