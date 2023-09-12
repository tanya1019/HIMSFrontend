import { Injectable } from '@angular/core';
import { Property } from '../class/Property';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  property:Property={
    propId: 0,
    custId: JSON.parse(String(localStorage.getItem("user"))).id,
    areaInSquareFeet: 0,
    costOfProperty: 0,
    ageOfBuilding: 0,
    pincode: 0,
    city: '',
    country: '',
    address: '',
    propertyType: 'Owned',
    premiumAmount: 0,
      contentsCost: 0,
      state : '' ,
      policyYear: 0
  }
  constructor() { }
  setData(newproperty:Property){
    this.property = newproperty;
  }
  getData(){
    return this.property;
  }
  
}
