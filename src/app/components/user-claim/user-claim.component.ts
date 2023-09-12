import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/class/Claim';
import { BackendClaimService } from 'src/app/services/backend-claim.service';

@Component({
  selector: 'app-user-claim',
  templateUrl: './user-claim.component.html',
  styleUrls: ['./user-claim.component.css']
})
export class UserClaimComponent implements OnInit {

onFileSelected($event: Event) {
  throw new Error('Method not implemented.');
}


  claim : Claim={
    id : 0,
    claimedDate: new Date(),
    documentProof: [],
    causeOfClaim: '',
    claimableAmount:0,
    claimRequestAmount:0,
    claimReviewed: false,

  }


message: string="";
errorMessage: string="";

claimableAmount = "";
claimRequestAmount= "";
selectedCause= "";


claimCauses: {lable:string, value:string}[] =[
  {lable:'fire',value:'fire'},
  {lable:'flood',value:'flood'},
]


submitClaim(){
  console.log('selected claim:' ,this.selectedClaim)
}

selectedClaim(arg0: string, selectedClaim: any) {
  throw new Error('Method not implemented.');
};


  constructor( private router: Router,private backendClaimService: BackendClaimService) {}

  
  ngOnInit(): void {}
    addClaim(PolId: number ,PropId:number) {
    this.backendClaimService.createClaimByOwnedPolicyidAndPropertyId(this.claim ,PolId, PropId)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.message = "Claim applied successfully"
        this.errorMessage = ""
      },
      error:(err)=>{
        console.log(err)
        this.errorMessage = "Failed to apply claim"
        this.message=""
    }
  })

  this.claim= new Claim(0,new Date(),[],'',0,0,false)

   }
  }


