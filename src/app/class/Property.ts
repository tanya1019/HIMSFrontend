export class Property{
     propId : number ;
	 custId : number;
	 areaInSquareFeet : number;
	 costOfProperty : number;
	 ageOfBuilding : number;
     pincode : number;
      city : string;
	  country : string
      address : string

      constructor(propId:number,custId:number, areaInSquareFeet:number,costOfProperty:number,pincode: number, city:string, country:string, ageOfBuilding:number, address : string){
            this.propId = propId;
            this.custId = custId;
            this.areaInSquareFeet = areaInSquareFeet;
            this.costOfProperty = costOfProperty;
            this.pincode = pincode;
            this.city = city;
            this.country = country;
            this.ageOfBuilding = ageOfBuilding;
            this.address = address
        }
	
}