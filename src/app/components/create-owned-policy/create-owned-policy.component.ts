
import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/class/Feature';

import { OwnedPolicy } from 'src/app/class/OwnedPolicy';
import { BackendFeatureService } from 'src/app/services/backend-feature.service';
import { BackendOwnedPolicyServiceService } from 'src/app/services/backend-owned-policy-service.service';

@Component({
  selector: 'app-create-owned-policy',
  templateUrl: './create-owned-policy.component.html',
  styleUrls: ['./create-owned-policy.component.css']
})
export class CreateOwnedPolicyComponent implements OnInit {

  ownedPolicy : OwnedPolicy = 
  {
    ownedPolicyId:0,
    custid:1,
    issueDate:'',
    expiryDate:'',
    nomineeName:'',
    nomineeAge:0,
    nomineeRelation:'',
    customePolicy:true,
    feature:[],
  }

  message : string = "";
  errorMessage :string = "";
  feat:Feature[] = [];

  constructor(private backendOwnedPolicyServiceService : BackendOwnedPolicyServiceService) { }

  ngOnInit(): void {
    this.loadAllFeaturesToComponent();
  }

  loadAllFeaturesToComponent(){
    this.backendOwnedPolicyServiceService.getAllFeatures().subscribe({
      
      next:(response: any)=>{console.log(response);
      this.feat=response;},
      error:(e:any)=>{console.log(e)}
    })
  }

  addOwnedPolicy(custid: number){
    this.backendOwnedPolicyServiceService.postOwnedPolicyByCustomerId(this.ownedPolicy, custid)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.message = "OwnedPolicy created successfully"
        this.errorMessage = ""
      },
      error:(err)=>{
        console.log(err)
        this.errorMessage = "Failed to create OwnedPolicy"
        this.message = ""
      }
      
    })

    this.ownedPolicy = new OwnedPolicy( 0,1,'','','',0,'',[])
  }

  





}
