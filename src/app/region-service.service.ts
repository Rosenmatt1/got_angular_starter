import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegionServiceService {

  constructor() { }

  places = {Dorne: "hot place", Winterfell: "cold place", Essos: "sandy place", Braavos: "brave place"}

  getRegions() {
    return this.places;
  }
}
