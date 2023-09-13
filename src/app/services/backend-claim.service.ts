import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from '../class/Claim';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendClaimService {

  constructor(private httpClient : HttpClient) {}

createClaimByOwnedPolicyidAndCustomerId(newClaim :Claim ,PolId:number,custId:number):Observable<any> {
  return this.httpClient.post("http://localhost:8090/claim/"+PolId+"/"+custId,newClaim,{ responseType:"json"})
}

getClaimsByCustomerId(custId:number):Observable<any> {
  return this.httpClient.get("http://localhost:8090/claim/"+custId)
}

getAllClaims():Observable<any> {
  return this.httpClient.get("http://localhost:8090/claims",{ responseType:"json"})
}

updateClaimByCustomerId(custId: number):Observable<any>{
  return this.httpClient.put("http://localhost:8090/claim/approve/" + custId, {responseType:"json"})
}

}
