import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from 'src/app/entities/ship';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  ships: Ship[];

  constructor(private shipServive: ShipService) { }

  ngOnInit(): void {
    this.getShips();
  }

  getShips(){
    this.shipServive.getShips().subscribe(response => {      
      this.ships = response;
    });
  }

  deleteShip(id: any){
    this.shipServive.deleteShip(id).subscribe(response => {console.log(response)},
      () => {this.getShips()});      
  }
}
