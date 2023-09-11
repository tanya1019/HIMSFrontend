import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminPolicy } from '../class/AdminPolicy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendPolicyService {

  constructor(private httpClient : HttpClient) { }

  postAdminPolicy(newAdminPolicy : AdminPolicy){
    return this.httpClient.post("http://localhost:8090/adminpolicy", newAdminPolicy )
  }

  getAllAdminPolicies() : Observable<any>{
    return this.httpClient.get("http://localhost:8090/policies", { responseType:"json"} )
  }
}
