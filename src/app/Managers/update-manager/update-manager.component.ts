import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Managers } from 'src/app/models/Managers';
import { ManagersService } from 'src/app/shared/managers.service';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent implements OnInit {

  id;
  object = new Managers();
  constructor(private serv :ManagersService , private router : Router 
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
  this.router.navigateByUrl('/list-Manager')
  })
  }

}
