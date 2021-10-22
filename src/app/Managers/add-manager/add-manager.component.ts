import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Managers } from 'src/app/models/Managers';
import { ManagersService } from 'src/app/shared/managers.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  object = new Managers();
  constructor(private serv : ManagersService , private router : Router ) { }

  ngOnInit(): void {
  }
  save(){
this.serv.post(this.object).subscribe(data =>{
 this.router.navigateByUrl('/list-Manager')
})
  }

}
