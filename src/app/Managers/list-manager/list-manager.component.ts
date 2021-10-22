import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagersService } from 'src/app/shared/managers.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  allData : [];
  constructor(private serv :ManagersService ,private router : Router) {
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
