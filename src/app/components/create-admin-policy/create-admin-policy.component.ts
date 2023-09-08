import { Component, OnInit } from '@angular/core';
import { AdminPolicy } from 'src/app/class/AdminPolicy';
import { BackendPolicyService } from '../../services/backend-policy.service';

@Component({
  selector: 'app-create-admin-policy',
  templateUrl: './create-admin-policy.component.html',
  styleUrls: ['./create-admin-policy.component.css']
})
export class CreateAdminPolicyComponent implements OnInit {

  adminPolicy : AdminPolicy = 
  {
    id: 0,
  policyName: "",
  policyDescription: "",
  policyDuration: 0,
  premiumAmount: 0,
  customPolicy: false,
  propertyAmount: 0,
  }

  message : string = "";
  errorMessage :string = "";
  constructor(private backendPolicyService : BackendPolicyService) { }


  ngOnInit(): void {}

  addAdminPolicy(){
    this.backendPolicyService.postAdminPolicy(this.adminPolicy)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.message = "Policy added successfully"
        this.errorMessage = ""
      },
      error:(err)=>{
        console.log(err)
        this.errorMessage = "Failed to add the policy"
        this.message = ""
      }
    })

    this.adminPolicy = new AdminPolicy(0,"","",0,0,false,0)
  }
}
