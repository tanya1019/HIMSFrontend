export class AdminPolicy{
  
  id: number;
  policyName: string;
  policyDescription: string;
  policyDuration: number;
  premiumAmount: number;
  customPolicy: boolean;
  propertyAmount: number;


  constructor( id: number,policyName: string,policyDescription: string,policyDuration: number,
    premiumAmount: number,customPolicy: boolean,propertyAmount: number)
    {
        this.id = id;
        this.policyName=policyName;
        this.policyDescription=policyDescription;
        this.policyDuration=policyDuration;
        this.premiumAmount=premiumAmount;
        this.customPolicy=customPolicy;
        this.propertyAmount=propertyAmount
  }

}