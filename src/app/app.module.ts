import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipEditComponent } from './ship/ship-edit/ship-edit.component';
import { ShipListComponent } from './ship/ship-list/ship-list.component';
import { ShipAddComponent } from './ship/ship-add/ship-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { JwtInterceptor } from './_interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ShipEditComponent,
    ShipListComponent,
    ShipAddComponent,
    LoginComponent,
    RegisterComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
