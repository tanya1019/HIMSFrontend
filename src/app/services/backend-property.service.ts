import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../class/Property';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendPropertyService {

  constructor(private httpClient : HttpClient) { }

  postPropertyByCustid(newProperty : Property , custId:number) : Observable<any> {
    return this.httpClient.post("http://localhost:8090/createProperty/" + custId, newProperty )
  }

  getPropertyById(custId: number) : Observable<any>{
    return this.httpClient.get("http://localhost:8090/getAllProperties/" + custId, { responseType:"json"} )
  }

}
