import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-dorne',
  templateUrl: './dorne.component.html',
  styleUrls: ['./dorne.component.scss']
})
export class DorneComponent implements OnInit {

  constructor(private reg: MessageService) { }
  aryaList: string[];

  ngOnInit() {
    this.aryaList = this.reg.getsAryaList();
  }


}
