import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ship } from 'src/app/entities/ship';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ship-add',
  templateUrl: './ship-add.component.html',
  styleUrls: ['./ship-add.component.css']
})
export class ShipAddComponent implements OnInit {
  shipForm: FormGroup;
  ship = <Ship>{};
  constructor(private fb: FormBuilder, private shipService: ShipService) { }

  ngOnInit(): void {
    this.intitializeForm();
  }

  intitializeForm() {
    this.shipForm = this.fb.group({
      type: ['battleship']
    })
  }

  addShip(){
    this.ship = this.shipForm.value;
    this.shipService.addShip(this.ship).subscribe(response => {console.log(response)});
  }
}
