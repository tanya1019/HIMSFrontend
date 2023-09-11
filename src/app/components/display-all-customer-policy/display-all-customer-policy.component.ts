import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPolicy } from 'src/app/class/AdminPolicy';
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

  constructor(private backendPolicyService : BackendPolicyService, private router:Router) { }

  ngOnInit(): void {
    this.loadPoliciesToComponent()
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

}
