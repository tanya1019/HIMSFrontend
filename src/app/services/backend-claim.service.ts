import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from '../class/Claim';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendClaimService {

  constructor(private httpClient : HttpClient) {}

createClaimByOwnedPolicyid(newClaim :Claim ,PolId:number):Observable<any> {
  return this.httpClient.post("http://localhost:8090/claim/"+PolId,newClaim,{ responseType:"json"})
}




getClaimsByOwnedPolicyidAndPropertyId(PolId:number):Observable<any> {
  return this.httpClient.get("http://localhost:8090//claim/"+PolId)
}

getAllClaims():Observable<any> {
  return this.httpClient.get("http://localhost:8090/claims",{ responseType:"json"})
}

updateClaimByCustomerId(custId: number):Observable<any>{
  return this.httpClient.put("http://localhost:8090/claim/approve/" + custId, {responseType:"json"})
}

}
