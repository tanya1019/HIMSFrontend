import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPolicy } from 'src/app/class/AdminPolicy';
import { Feature } from 'src/app/class/Feature';
import { BackendOwnedPolicyServiceService } from 'src/app/services/backend-owned-policy-service.service';
import { BackendPolicyService } from 'src/app/services/backend-policy.service';

@Component({
  selector: 'app-display-all-customer-policy',
  templateUrl: './display-all-customer-policy.component.html',
  styleUrls: ['./display-all-customer-policy.component.css']
})
export class DisplayAllCustomerPolicyComponent implements OnInit {


  adminPolicies : AdminPolicy[] = []

  message : string = ""
  errorMessage : string = ""
  isLoaded : Boolean = false;

  features:Feature[]=[]

  constructor(private backendOwnedPolicyServiceService: BackendOwnedPolicyServiceService,private backendPolicyService : BackendPolicyService, private router:Router) { }

  ngOnInit(): void {
    this.loadPoliciesToComponent();
    this.loadAllFeaturesToComponent()
  }

  backToHome(){
    this.router.navigate(["/home"]);
  }
  
  loadPoliciesToComponent(){
    this.isLoaded = false;
    this.backendPolicyService.getAllAdminPolicies().subscribe(
      {
          next: (data)=>{
          console.log(data)
          this.isLoaded = true;
          this.adminPolicies = data

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

  goToOwnedPolicy(adminpolicyid?:number){
    console.log(adminpolicyid);
    if(adminpolicyid!=undefined)
    this.router.navigate(["/ownedPolicy/",adminpolicyid]);
  }

  loadAllFeaturesToComponent(){
    this.backendOwnedPolicyServiceService.getAllFeatures().subscribe({
      next:(response: any)=>{
        console.log("arry of features:-------->",response);
        this.features=response;
      },
      error:(e:any)=>{
        console.log(e)
      }
    })
  }

}
