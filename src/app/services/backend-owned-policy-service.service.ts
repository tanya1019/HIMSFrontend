import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnedPolicy } from '../class/OwnedPolicy';

@Injectable({
  providedIn: 'root'
})
export class BackendOwnedPolicyServiceService {

  constructor(private httpClient: HttpClient) { }

  postOwnedPolicyByCustomerId(newOwnedPolicy : OwnedPolicy, custid:number){
    return this.httpClient.post("http://localhost:8090/ownedpolicy/"+custid, newOwnedPolicy )
  }

  getOwnedPoliciesByCustomerId(custid:number) : Observable<any>{
    return this.httpClient.get("http://localhost:8090/ownedpolicies/"+custid, { responseType:"json"} )
  }

  getAllFeatures() : Observable<any> {
    return this.httpClient.get("http://localhost:8090/features",{responseType:"json"})
  }

}
