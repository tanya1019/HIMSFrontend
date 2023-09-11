import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/class/Property';

@Component({
  selector: 'app-premium-calculator',
  templateUrl: './premium-calculator.component.html',
  styleUrls: ['./premium-calculator.component.css']
})
export class PremiumCalculatorComponent implements OnInit {

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
    propertyType: ''
  };

  message : string = "";
  errorMessage :string = "";
  year : number = 0;
  contents : number = 0;
  isOwned : boolean = false;
  isRented : boolean = false;
  forBuilding : boolean = false;
  forContents : boolean = false;
  forBuildingAndContents : boolean = false;

  riskFactor : number = 0;
  totalPremium:number = 0;
  checkedNumber:number = 0;
  limitNumber :number= 1;

 

  constructor() { }

  ngOnInit(): void {
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
        this.totalPremium = (this.contents/this.property.areaInSquareFeet)*0.05*this.year;
      }


    }
    else{
      this.totalPremium = (this.contents/this.property.areaInSquareFeet)*0.05*this.year;
    }
    

  }
  


}
