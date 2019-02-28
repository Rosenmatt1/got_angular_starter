import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(places) {
    return this.http.get(`http://cors-anywhere.herokuapp.com/https://guarded-spire-16362.herokuapp.com/get_region/${places}`)
  }

}
