export class OwnedPolicy{
   
    adminPolicyId:number
    id:number;
    custid:number;
    issueDate: string;
    expiryDate: string;
    nomineeName: string;
    nomineeAge: number;
    nomineeRelation: string;
    customePolicy:boolean;
    feature:[];

    constructor(adminPolicyId:number,id:number, custid:number, issueDate: string, expiryDate: string, nomineeName: string, nomineeAge: number, nomineeRelation: string, feature:[])
    {     
        this.adminPolicyId = adminPolicyId;
        this.id = id;
        this.custid = custid
        this.issueDate = issueDate;
        this.expiryDate =  expiryDate;
        this.nomineeName = nomineeName;
        this.nomineeAge = nomineeAge;
        this.nomineeRelation = nomineeRelation;
        this.customePolicy = true;
        this.feature = feature;
    }

}