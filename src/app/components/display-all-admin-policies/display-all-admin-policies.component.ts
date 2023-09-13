import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminPolicy } from 'src/app/class/AdminPolicy';
import { BackendPolicyService } from 'src/app/services/backend-policy.service';

@Component({
  selector: 'app-display-all-admin-policies',
  templateUrl: './display-all-admin-policies.component.html',
  styleUrls: ['./display-all-admin-policies.component.css']
})
export class DisplayAllAdminPoliciesComponent implements OnInit {

  adminPolicies : AdminPolicy[] = []
  message : string = ""
  errorMessage : string = ""
  isLoaded : Boolean = false;
features: any;

  constructor(private backendPolicyService : BackendPolicyService, private router:Router) { }

  ngOnInit(): void {
    this.loadPoliciesToComponent()
  }
  backToHome(){
    this.router.navigate(["/admin/home"]);
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

}
