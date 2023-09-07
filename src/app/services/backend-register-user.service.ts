import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/User';

@Injectable({
  providedIn: 'root'
})
export class BackendRegisterUserService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user:User):Observable<any>{
    return this.httpClient.post("http://localhost:8090/customer",user);
  }
}
