import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedUi/navbar/navbar.component';
import { HomeComponent } from './sharedUi/home/home.component';
import { NotfoundComponent } from './sharedUi/notfound/notfound.component';
import { ListemployeesComponent } from './employee/listemployees/listemployees.component';
import { AddemployeesComponent } from './employee/addemployees/addemployees.component';
import{HttpClientModule}from"@angular/common/http"
import{FormsModule}from"@angular/forms";
import { UpdateemployeeComponent } from './employee/updateemployee/updateemployee.component';
import { ListManagerComponent } from './Managers/list-manager/list-manager.component';
import { AddManagerComponent } from './Managers/add-manager/add-manager.component';
import { UpdateManagerComponent } from './Managers/update-manager/update-manager.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    ListemployeesComponent,
    AddemployeesComponent,
    UpdateemployeeComponent,
    ListManagerComponent,
    AddManagerComponent,
    UpdateManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
