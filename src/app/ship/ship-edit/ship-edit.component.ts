import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ship } from 'src/app/entities/ship';
import { ShipService } from 'src/app/services/ship.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-ship-edit',
  templateUrl: './ship-edit.component.html',
  styleUrls: ['./ship-edit.component.css']
})
export class ShipEditComponent implements OnInit {
  id!: number;
  type!: string; 
  ship = <Ship>{};
  shipForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private shipService: ShipService) { }

  ngOnInit(): void {
    this.intitializeForm();
    this.getShip();
  }

  getShip(){
    this.route.params.subscribe(__values => this.ship.id = __values['id']);
    this.shipService.getShip(this.ship.id).subscribe(response => this.ship.type = response.type);
    console.log('getShip ' + this.ship.type);

  }

  intitializeForm() {    
    console.log('Initialize form ' + this.ship.type);
    this.shipForm = this.fb.group({
      type: [this.ship.type]
    })
  }  

  updateShip(){
    // this.ship.id = this.id;
    this.ship.type = this.shipForm.value['type'];
    console.log(this.ship)
    this.shipService.updateShip(this.ship).subscribe(response => {console.log(response.toString)},
    () => {
      this.getShip();
      this.intitializeForm();
    });  
  }

}
