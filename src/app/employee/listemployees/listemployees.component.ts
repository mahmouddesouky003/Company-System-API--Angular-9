import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Window } from 'selenium-webdriver';
import { ApiFunctionsService } from 'src/app/shared/api-functions.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {
    allData : [];
   constructor(private serv :EmployeeService ,private router : Router) {
    this.serv.getEmployee().subscribe((data : any) =>{
     this.allData= data
      
    })
  }
 remove(id){
   this.serv.delete(id).subscribe(data=>{
     window.location.reload();
   })
 }
  ngOnInit(): void {
  }

}
