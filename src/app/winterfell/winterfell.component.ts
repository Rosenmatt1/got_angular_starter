import { Component, OnInit } from '@angular/core';
import {RegionServiceService} from '../region-service.service'

@Component({
  selector: 'app-winterfell',
  templateUrl: './winterfell.component.html',
  styleUrls: ['./winterfell.component.scss']
})
export class WinterfellComponent implements OnInit {

  constructor(private reggie:RegionServiceService) { }

  region_data:{};
  my_data:string;

  ngOnInit() {
    this.region_data = this.reggie.getRegions();
    this.my_data = this.region_data["winterfell"]
  }

}
