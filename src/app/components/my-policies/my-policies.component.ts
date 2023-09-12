import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnedPolicy } from 'src/app/class/OwnedPolicy';
import { BackendOwnedPolicyServiceService } from 'src/app/services/backend-owned-policy-service.service';

@Component({
  selector: 'app-my-policies',
  templateUrl: './my-policies.component.html',
  styleUrls: ['./my-policies.component.css']
})
export class MyPoliciesComponent implements OnInit {
  policies: OwnedPolicy[] = []
  message : string = ""
  errorMessage : string = ""
  isLoaded : Boolean = false;
  customerId: number = JSON.parse(String(localStorage.getItem("user"))).id
  constructor(private backendPolicyService: BackendOwnedPolicyServiceService,private router:Router) { }

  ngOnInit(): void {
    this.loadPoliciesToComponent(this.customerId);
  }
  loadPoliciesToComponent(custId: number){
   
    this.isLoaded = false;
    this.backendPolicyService.getOwnedPoliciesByCustomerId(custId).subscribe(
      {
          next: (data)=>{
          console.log(data)
          // console.log(user.data.id)
          // console.log("------->" + JSON.parse(localStorage.getItem("user")))
          this.isLoaded = true;
          this.policies = data

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
