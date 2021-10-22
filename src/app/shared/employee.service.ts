import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiFunctionsService<Employee> {

  constructor(http : HttpClient) { 
    super("http://localhost:3000/employees" , http)
  }
}
