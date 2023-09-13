import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/class/Claim';
import { BackendClaimService } from 'src/app/services/backend-claim.service';

@Component({
  selector: 'app-display-all-claims',
  templateUrl: './display-all-claims.component.html',
  styleUrls: ['./display-all-claims.component.css']
})
export class DisplayAllClaimsComponent implements OnInit {


  isUpdate: boolean = false;
  message: string = "";
  errorMessage: string = "";
  isUpdateSuccess: boolean = false;
  
  claims:Claim[] = [];

  claimUpdate: Claim = new Claim(0,"",[],"",0,0,false);

  isLoaded:boolean = true;

  
  constructor(private router: Router, private backendClaimService: BackendClaimService) { }

  ngOnInit(): void {
    this.loadPoliciesToComponent();
  }


  loadPoliciesToComponent(){
    this.isLoaded = false;
    this.backendClaimService.getAllClaims().subscribe(
      {
          next: (data)=>{
          console.log(data)
          this.isLoaded = true;
          this.claims = data
          
        },
          error : (err)=>{
          console.log(err)
        },
        complete: ()=>{
          console.log("loaded the data")
        }
      }
    );
  }

  updateClaim(claim: Claim) {
    this.isUpdate = true;
    this.claimUpdate = claim;
  }

  updateClaimById(claimId?:number) {
    if(claimId !=undefined)
    this.backendClaimService.updateClaimByCustomerId(claimId)
    .subscribe({
      next:(data)=>{
        console.log(data);
        this.loadPoliciesToComponent();
      },
      error:(err)=>{console.log(err);}
    })
  }

}
