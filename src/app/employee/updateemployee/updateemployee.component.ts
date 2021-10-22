import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { ApiFunctionsService } from 'src/app/shared/api-functions.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
 id;
  object = new Employee();
  constructor(private serv : EmployeeService , private router : Router 
    , private activeRoute: ActivatedRoute) { 
     this.id = this.activeRoute.snapshot.paramMap.get('id')
     this.serv.getById(this.id).subscribe((data : any ) => {
      this.object= data ;
     })
    }

  ngOnInit(): void {
  }
  update(){
this.serv.put(this.object , this.id).subscribe(data =>{
 this.router.navigateByUrl('listemployees')
})
  }
}
