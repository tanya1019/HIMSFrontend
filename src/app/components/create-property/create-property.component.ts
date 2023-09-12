import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/class/Property';
import { BackendPropertyService } from '../../services/backend-property';
import { User } from 'src/app/class/User';
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
    propertyType: 'Owned',
    premiumAmount: 0,
      contentsCost: 0,
      state : '' 
    
  };

  

  message : string = "";
  errorMessage :string = "";


  constructor(private router: Router, private backendPropertyService: BackendPropertyService) {}

  ngOnInit(): void {}

  policyYear : number = 0;
  contents : number = 0;
  isOwned : boolean = false;
  isRented : boolean = false;
  forBuilding : boolean = false;
  forContents : boolean = false;
  forBuildingAndContents : boolean = false;

  riskFactor : number = 0;
  totalPremium:number = 0;

  addProperty(custId: number, propertyForm:NgForm){
    
    this.backendPropertyService.postPropertyByCustid(this.property, custId)
    
    .subscribe({

      next:(data)=>{
        console.log(data)
        this.message = "Property created successfully"
        this.router.navigate(["/home"])
        this.errorMessage = ""
        propertyForm.form.reset();
      },
      error:(err)=>{
        console.log(err)
        this.errorMessage = "Failed to create Property"
        this.message = ""
      }
      
    })
    this.property = new Property( 0,0,0,0,0,"","",0,"","",0,0,"")
  }

  getSelectedValue(value:string){
    console.log("Selected value",value);
    this.property.propertyType = value;
    if(this.property.propertyType  == "Owned"){
      this.isOwned = !this.isOwned;
    }
    else{
      this.isRented = !this.isRented;
    }
  }
  getData1(){

    this.forBuilding = !this.forBuilding;
  }
  getData2(){
  
    this.forBuildingAndContents = !this.forBuildingAndContents;
  }
  getData3(){
    this.forContents =!this.forContents;
  }

  getRiskFactor(){
    if(this.property.ageOfBuilding>0 && this.property.ageOfBuilding<=5)
      this.riskFactor = 0.4;
    else if(this.property.ageOfBuilding>5 && this.property.ageOfBuilding<=15)
      this.riskFactor = 0.45;
    else if(this.property.ageOfBuilding>15 && this.property.ageOfBuilding<=25)
      this.riskFactor = 0.5;
    else if(this.property.ageOfBuilding>25 && this.property.ageOfBuilding<=35)
      this.riskFactor = 0.55;
    else if(this.property.ageOfBuilding>35 && this.property.ageOfBuilding<=45)
      this.riskFactor = 0.18;
    else
      this.riskFactor = 0.2;
  }
  getPremium(){
    if(this.property.propertyType=="Owned"){
      this.getRiskFactor();
      if(this.forBuilding==true){
        this.totalPremium = (this.property.costOfProperty/this.property.areaInSquareFeet)*this.riskFactor;
      }
      else if(this.forContents==true){
        this.totalPremium = ((this.property.costOfProperty+this.contents)/this.property.areaInSquareFeet)*this.riskFactor;
      }
      else{
        this.totalPremium = (this.contents/this.property.areaInSquareFeet)*0.05*this.policyYear;
      }


    }
    else{
      this.totalPremium = (this.contents/this.property.areaInSquareFeet)*0.05*this.policyYear;
    }

    this.property.premiumAmount = this.totalPremium ;
  }
 
  


}
//step 1: 

 

