import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService<T>{
 
  constructor(@Inject(String) public configUrl : string , public http : HttpClient) { }

  getEmployee(): Observable<T>{
    return this.http.get<T>(this.configUrl);
  }

  getById(id): Observable<T>{
    return this.http.get<T>(this.configUrl + `/$(id)`);
  }

  post(object): Observable<T>{
    return this.http.post<T>(this.configUrl , object);
  }

  put(object , id ){
return this.http.put(this.configUrl + `/$(id)` , object);
  }

  delete(id): Observable<T>{
    return this.http.delete<T>(this.configUrl + `/$(id)`);
  }
}
