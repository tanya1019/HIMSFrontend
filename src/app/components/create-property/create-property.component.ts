import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/class/Property';
import { BackendPropertyService } from '../../services/backend-property';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css'],
})
export class CreatePropertyComponent implements OnInit {
  property: Property = {
    propId: 0,
    custId: JSON.parse(String(localStorage.getItem("user"))).id,
    areaInSquareFeet: 0,
    costOfProperty: 0,
    ageOfBuilding: 0,
    pincode: 0,
    city: '',
    country: '',
    address: '',
  };

  message : string = "";
  errorMessage :string = "";

  constructor(private router: Router, private backendPropertyService: BackendPropertyService) {}

  ngOnInit(): void {}

  addProperty(custId: number, propertyForm:NgForm){
    propertyForm.form.reset();
    this.backendPropertyService.postPropertyByCustid(this.property, custId)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.message = "Property created successfully"
        this.errorMessage = ""
      },
      error:(err)=>{
        console.log(err)
        this.errorMessage = "Failed to create Property"
        this.message = ""
      }
      
    })
    this.property = new Property( 0,0,0,0,0,"","",0,"")
  }
}
