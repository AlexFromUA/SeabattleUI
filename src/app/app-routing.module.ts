import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipAddComponent } from './ship/ship-add/ship-add.component';
import { ShipEditComponent } from './ship/ship-edit/ship-edit.component';
import { ShipListComponent } from './ship/ship-list/ship-list.component';

const routes: Routes = [
  {path: '', component: ShipListComponent},
  {path: 'ship-edit/:id', component: ShipEditComponent},
  {path: 'ship-add', component: ShipAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
