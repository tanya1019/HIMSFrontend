import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/class/Property';
import { BackendPropertyService } from '../../services/backend-property.service';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css'],
})
export class CreatePropertyComponent implements OnInit {
  property: Property = {
    propId: 0,
    custId: 0,
    areaInSquareFeet: 0,
    costOfProperty: 0,
    ageOfBuilding: 0,
    pincode: 0,
    city: '',
    country: '',
    address: '',
  };
  constructor(private router: Router, private backendPropertyService: BackendPropertyService) {}

  ngOnInit(): void {}

  addProperty(custId: number){
    this.backendPropertyService.postPropertyByCustid(this.property, custId)
    .subscribe({
      next:(data)=>{console.log(data)},
      error:(err)=>{console.log(err)}
      
    })
    this.property = new Property( 0,0,0,0,0,"","",0,"")
  }
}
