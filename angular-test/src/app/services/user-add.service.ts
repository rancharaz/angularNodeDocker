import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../data-types/data-type';

@Injectable({
  providedIn: 'root'
})
export class UserAddService {

  constructor(private http: HttpClient) { }

  addUser(data:user){
    return this.http.post(`http://localhost:3000/users`, data)
  }
}
