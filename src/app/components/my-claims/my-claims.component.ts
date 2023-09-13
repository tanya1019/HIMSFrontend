import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Claim } from 'src/app/class/Claim';
import { BackendClaimService } from 'src/app/services/backend-claim.service';

@Component({
  selector: 'app-my-claims',
  templateUrl: './my-claims.component.html',
  styleUrls: ['./my-claims.component.css']
})
export class MyClaimsComponent implements OnInit {

  claims: Claim[] = []

  message : string = ""
  errorMessage : string = ""

  isLoaded : Boolean = false;

  customerId: number = JSON.parse(String(localStorage.getItem("user"))).id

  constructor(private backendClaimService: BackendClaimService,private router:Router) { }

  ngOnInit(): void {
    this.loadPoliciesToComponent(this.customerId);
  }
  loadPoliciesToComponent(custId: number){
   
    this.isLoaded = false;
    this.backendClaimService.getClaimsByCustomerId(custId).subscribe(
      {
          next: (data)=>{
          console.log(data)
          // console.log(user.data.id)
          // console.log("------->" + JSON.parse(localStorage.getItem("user")))
          this.isLoaded = true;
          this.claims = data
          console.log(this.claims);
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
}
