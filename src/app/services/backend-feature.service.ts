import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from '../class/Feature';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendFeatureService {

  constructor(private httpClient : HttpClient) { }

  postFeature(newFeature : Feature) : Observable<any> {
    return this.httpClient.post("http://localhost:8090/feature" ,  newFeature,{responseType:"json"})
  }//http://localhost:8090/feature

}
