import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { ApiFunctionsService } from 'src/app/shared/api-functions.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css']
})
export class AddemployeesComponent implements OnInit {

  object = new Employee();
  constructor(private serv : EmployeeService , private router : Router ) { }

  ngOnInit(): void {
  }
  save(){
this.serv.post(this.object).subscribe(data =>{
 this.router.navigateByUrl('/listemployees')
})
  }

}
