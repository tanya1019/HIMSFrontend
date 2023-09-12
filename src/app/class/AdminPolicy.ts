import { Feature } from "./Feature";

export class AdminPolicy{
  
  // id: number;
  // policyName: string;
  // policyDescription: string;
  // policyDuration: number;
  // premiumAmount: number;
  // customPolicy: boolean;
  // propertyAmount: number;


public features?: Feature[] = [];
  constructor( public id?: number,public policyName?: string,public policyDescription?: string,public policyDuration?: number,
    public premiumAmount: number=0,public customPolicy?: boolean,public propertyAmount?: number)
    {
        // this.id = id;
        // this.policyName=policyName;
        // this.policyDescription=policyDescription;
        // this.policyDuration=policyDuration;
        // this.premiumAmount=premiumAmount;
        // this.customPolicy=customPolicy;
        // this.propertyAmount=propertyAmount
  }

}