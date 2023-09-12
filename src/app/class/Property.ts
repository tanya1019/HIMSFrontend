import { User } from "./User";

export class Property{
     propId : number ;
	 custId : number;
	 areaInSquareFeet : number;
	 costOfProperty : number;
	 ageOfBuilding : number;
     pincode : number;
      city : string;
	  country : string;
      address : string;
      propertyType : string;
      premiumAmount: number;
      contentsCost: number;
      state : string; 
      policyYear : number;

      constructor(propId:number,custId:number, areaInSquareFeet:number,costOfProperty:number,pincode: number, city:string, country:string, ageOfBuilding:number, address : string,propertyType:string,premiumAmount: number,contentsCost: number,state : string,policyYear : number){
            this.propId = propId;
            this.custId = custId;
            this.areaInSquareFeet = areaInSquareFeet;
            this.costOfProperty = costOfProperty;
            this.pincode = pincode;
            this.city = city;
            this.country = country;
            this.ageOfBuilding = ageOfBuilding;
            this.address = address;
            this.propertyType=propertyType;
            this.premiumAmount = premiumAmount;
            this.contentsCost = contentsCost;
            this.state = state
            this.policyYear = policyYear;
            
        }
	
}