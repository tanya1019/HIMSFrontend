import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Claim } from 'src/app/class/Claim';
import { BackendClaimService } from 'src/app/services/backend-claim.service';

@Component({
  selector: 'app-user-claim',

  templateUrl: './user-claim.component.html',

  styleUrls: ['./user-claim.component.css'],
})
export class UserClaimComponent implements OnInit {
  onFileSelected($event: Event) {
    //throw new Error('Method not implemented.');
  }

  claim: Claim = {
    id: 0,
    documentProof: [],
    causeOfClaim: '',
    claimableAmount: 0,
    claimRequestAmount: 0,
    claimReviewed: false,
    claimedDate: "",
  };

  message: string = '';
  errorMessage: string = '';
  claimableAmount: any;
  claimRequestAmount: any;
  claimCauses: { lable: string; value: string }[] = [];


  selectedClaim(arg0: string, selectedClaim: any) {
    throw new Error('Method not implemented.');
  }
  selectedCause: any;

  PolId:number=0;

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private backendClaimService: BackendClaimService,
  ) {}

  

  ngOnInit(): void {

    this.route.params.subscribe({
      next:(params)=>{
        this.PolId = +params['ownedpolicyid']
        console.log("Polid=========>",this.PolId)
      },
      error:()=>{}
    })

  }

  addClaim() {
    this.backendClaimService
      .createClaimByOwnedPolicyid(this.claim, this.PolId)

      .subscribe({
        next: (data) => {
          console.log(data);
          this.claim = data;
          this.message = 'Claim applied successfully';
          this.errorMessage = '';
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = 'Failed to apply claim';
          this.message = '';
        },
      });
    this.claim = new Claim(0,"", [], '', 0, 0, false);
  }
}
