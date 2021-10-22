import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeesComponent } from './employee/addemployees/addemployees.component';
import { ListemployeesComponent } from './employee/listemployees/listemployees.component';
import { UpdateemployeeComponent } from './employee/updateemployee/updateemployee.component';
import { AddManagerComponent } from './Managers/add-manager/add-manager.component';
import { ListManagerComponent } from './Managers/list-manager/list-manager.component';
import { UpdateManagerComponent } from './Managers/update-manager/update-manager.component';
import { HomeComponent } from './sharedUi/home/home.component';
import { NotfoundComponent } from './sharedUi/notfound/notfound.component';


const routes: Routes = [
  {path:"home" , component :HomeComponent },
  {path:"" , component :HomeComponent },
  {path:"listemployees" , component :ListemployeesComponent },
  {path:"addemployees" , component :AddemployeesComponent },
  {path:"updateemployee/:id" , component :UpdateemployeeComponent},

  {path:"list-Manager" , component :ListManagerComponent },
  {path:"add-Manager" , component :AddManagerComponent },
  {path:"update-Manager/:id" , component :UpdateManagerComponent},
  {path:"**" , component :NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
