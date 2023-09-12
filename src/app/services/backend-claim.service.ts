import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from '../class/Claim';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendClaimService {

  constructor(private httpClient : HttpClient) {}

createClaimByOwnedPolicyidAndPropertyId(newClaim :Claim ,PolId:number,PropId:number):Observable<any> {
  return this.httpClient.post("http://localhost:8090//claim/"+PolId+"/"+PropId, { responseType:"json"})
}
getClaimsByOwnedPolicyidAndPropertyId(PolId:number,PropId:number):Observable<any> {
  return this.httpClient.get("http://localhost:8090//claim/"+PropId+"/"+PolId)

}
}
