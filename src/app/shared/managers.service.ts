import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Managers } from '../models/Managers';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class ManagersService extends ApiFunctionsService<Managers>{

  constructor(http : HttpClient) { 
    super("http://localhost:3000/Managers" , http)
  }
}
