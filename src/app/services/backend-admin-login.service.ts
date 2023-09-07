import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../class/Admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendLoginService {

  constructor(private httpClient: HttpClient) { }

  loginUser(admin:Admin):Observable<any>{
    console.log(admin);
    return this.httpClient.post("http://localhost:8090/adminLogin",admin);
  }
}
