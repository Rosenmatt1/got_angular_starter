import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title:string = 'westeros';
  season_8:boolean = false;

  characters:string[] = ["Tyrian", "Deanerys", "The Hound", "Aryah Stark"];
  
  links:string[] = ["dorne", "winterfell", "essos", "braavos"];

  counter:number = 0; 

  bump(){
     this.counter++;
  }

  reveal(){
    this.season_8 = !this.season_8;
  }

}
