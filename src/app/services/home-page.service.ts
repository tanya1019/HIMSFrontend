import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private httpClient: HttpClient) { }
  
  getAllPolicy() : Observable<any> {
    return this.httpClient.get("http://localhost:8090/allPolicies",{responseType :"json"} )
  }
}
