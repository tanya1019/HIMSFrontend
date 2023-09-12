import { Feature } from "./Feature";

export class AdminPolicy{
  
  public features?:Feature[]=[];
  constructor(public id?: number,public policyName?: string,public policyDescription?: string,public policyDuration?: number,
    public premiumAmount?: number,public customPolicy?: boolean,public propertyAmount?: number)
    {

    }

}