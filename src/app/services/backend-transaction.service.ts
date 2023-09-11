import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendTransactionService {

  constructor(private httpClient : HttpClient) { }

  createTransaction(amount:number){
    return this.httpClient.get("http://localhost:8090/createtransaction/"+amount, { responseType:"json"})
  }

}
