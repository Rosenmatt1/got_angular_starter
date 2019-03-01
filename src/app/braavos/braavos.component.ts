import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-braavos',
  templateUrl: './braavos.component.html',
  styleUrls: ['./braavos.component.scss']
})
export class BraavosComponent implements OnInit {

  constructor(private data: DataService) { }

  gotData: {}

  ngOnInit() {
    this.loadData()
  }

  image_path:string = 'assets/images/braavos.png';

  loadData() {
    this.data.getData("braavos").subscribe(payload => {
      this.gotData = payload
      console.log(payload)
    })
  }

}
