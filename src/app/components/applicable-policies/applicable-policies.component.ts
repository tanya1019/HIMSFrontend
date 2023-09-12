import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPolicy } from 'src/app/class/AdminPolicy';
import { Property } from 'src/app/class/Property';
import { BackendPolicyService } from 'src/app/services/backend-policy.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-applicable-policies',
  templateUrl: './applicable-policies.component.html',
  styleUrls: ['./applicable-policies.component.css']
})
export class ApplicablePoliciesComponent implements OnInit {
  adminPolicies:AdminPolicy[]=[];

  
  message : string = ""
  errorMessage : string = ""
  isLoaded : Boolean = false;
  //adminPolicies:AdminPolicy[]=[];

  property: Property = {
    propId: 0,
    custId: JSON.parse(String(localStorage.getItem("user"))).id,
    areaInSquareFeet: 0,
    costOfProperty: 0,
    ageOfBuilding: 0,
    pincode: 0,
    city: '',
    country: '',
    address: '',
    propertyType: 'Owned',
    premiumAmount: 0,
      contentsCost: 0,
      state : '' ,
      policyYear: 0
    
  };


  constructor(private backendPolicyService : BackendPolicyService, private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
    this.loadPoliciesToComponent()
  }
  backToHome(){
    this.router.navigate(["/admin/home"]);
  }
  loadPoliciesToComponent(){
    this.property = this.dataService.getData();
    console.log("customer premium",this.property.premiumAmount);
    // this.property.policyYear = this.dataService.getyear();

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
    console.log(this.adminPolicies);
  }
  

}
