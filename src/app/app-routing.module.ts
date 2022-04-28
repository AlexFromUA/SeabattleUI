import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ShipAddComponent } from './ship/ship-add/ship-add.component';
import { ShipEditComponent } from './ship/ship-edit/ship-edit.component';
import { ShipListComponent } from './ship/ship-list/ship-list.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: ShipListComponent, canActivate: [AuthGuard]},
  {path: 'ship-edit/:id', component: ShipEditComponent, canActivate: [AuthGuard]},
  {path: 'ship-add', component: ShipAddComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
