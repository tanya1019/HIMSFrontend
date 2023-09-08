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
  }

  getAllFeatures() : Observable<any> {
    return this.httpClient.get("http://localhost:8090/getAllFeature",{responseType:"json"})
  }

  deleteFeaturetById(id: number): Observable<any> {
    // console.log("Inside product service deleteby id:" + id);
    
    return this.httpClient.delete("http://localhost:8090/delete/feature/" + id, { responseType: "json" });
  }

  updateFeature(feature: Feature): Observable<any> {

    return this.httpClient.put("http://localhost:8090/feature/{id}" , feature, { responseType: "json" });
 
  }
}
