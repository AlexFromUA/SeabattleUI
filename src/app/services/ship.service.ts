import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ship } from '../entities/ship';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getShips(){
    return this.http.get<Ship[]>(this.baseUrl + 'ship/');
  }

  getShip(id: number): Observable<Ship>{
    return this.http.get<Ship>(this.baseUrl + 'ship/' + id);
  }

  deleteShip(id: number){
    return this.http.delete(this.baseUrl + 'ship/' + id);
  }

  addShip(ship: Ship){
    return this.http.post(this.baseUrl + 'ship/add', ship);
  }

  updateShip(ship: Ship){
    return this.http.put(this.baseUrl + 'ship/update', ship);
  }
}
