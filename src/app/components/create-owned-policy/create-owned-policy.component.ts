
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminPolicy } from 'src/app/class/AdminPolicy';
import { Feature } from 'src/app/class/Feature';

import { OwnedPolicy } from 'src/app/class/OwnedPolicy';
import { BackendOwnedPolicyServiceService } from 'src/app/services/backend-owned-policy-service.service';
import { BackendPolicyService } from 'src/app/services/backend-policy.service';

@Component({
  selector: 'app-create-owned-policy',
  templateUrl: './create-owned-policy.component.html',
  styleUrls: ['./create-owned-policy.component.css']
})
export class CreateOwnedPolicyComponent implements OnInit {

  adminPolicyId:number =0;


  ownedPolicy : OwnedPolicy = 
  {
    adminPolicyId:0,
    id:0,
    custid:JSON.parse(String(localStorage.getItem("user"))).id,
    issueDate:'',
    expiryDate:'',
    nomineeName:'',
    nomineeAge:0,
    nomineeRelation:'',
    customePolicy:true,
    feature:[],
  }

 

  adminPolicy:AdminPolicy = new AdminPolicy();


  // totalPremiumAmount:number = this.adminPolicy.premiumAmount;


  isLoaded : Boolean = false;

  // adminPolicyId: number = JSON.parse(String(localStorage.getItem("adminpolicyid"))).id


  message : string = "";
  errorMessage :string = "";
  features:Feature[] = [];

  constructor(private router : Router,private backendPolicyService:BackendPolicyService,private route : ActivatedRoute,private backendOwnedPolicyServiceService : BackendOwnedPolicyServiceService) { }

  ngOnInit(): void {
    // console.log("customer id------>", this.ownedPolicy.custid);

    this.loadAllFeaturesToComponent();

    this.route.params.subscribe(
      {
        next:(params)=>{
            this.adminPolicyId = +params["adminpolicyid"];
            this.backendPolicyService.getAdminPolicyById(this.adminPolicyId).subscribe(
              {
                  next: (data)=>{
                    // console.log("adminPolicy id------>",this.adminPolicyId);
                    // console.log("customer id2------>", this.ownedPolicy.custid);
                  console.log(data)
                  this.isLoaded = true;
                  this.adminPolicy = data
                },

                complete: ()=>{
                  console.log("loaded the data")
                }
              }
            );
        },
        error:(err)=>{
          console.log(err); 
        }
      }
    )
  }



  addOwnedPolicy(custid: number){

    this.backendOwnedPolicyServiceService.postOwnedPolicyByCustomerId(this.ownedPolicy, custid, this.adminPolicyId)
    .subscribe({
      next:(data)=>{
        console.log(data)
        // console.log("adminPolicy id------>",this.adminPolicyId);
        // console.log("customer id2------>", this.ownedPolicy.custid);
        
        this.message = "OwnedPolicy created successfully"
        this.errorMessage = ""
        console.log(this.adminPolicy.premiumAmount)
        this.router.navigate(["/payments/",this.adminPolicy.premiumAmount])
      },
      error:(err)=>{
        console.log(err)
        this.errorMessage = "Failed to create OwnedPolicy"
        this.message = ""
      }
      
    })
    this.ownedPolicy = new OwnedPolicy(this.adminPolicyId,0,1,'','','',0,'',[])
  }
  

  loadAllFeaturesToComponent(){
    this.backendOwnedPolicyServiceService.getAllFeatures().subscribe({
      next:(response: any)=>{
        // console.log("arry of features:-------->",response);
        this.features=response;
      },
      error:(e:any)=>{
        console.log(e)
      }
    })
  }

}
