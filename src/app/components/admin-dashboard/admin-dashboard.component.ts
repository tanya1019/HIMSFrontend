import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/class/Claim';
import { Feature } from 'src/app/class/Feature';
import { User } from 'src/app/class/User';
import { BackendLoginService } from 'src/app/services/backend-admin-login.service';
import { BackendClaimService } from 'src/app/services/backend-claim.service';
import { BackendFeatureService } from 'src/app/services/backend-feature.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user: User[] = [];

  totalUsers: number = 0; 


  claims:Claim[] = [];

  totalClaims: number = 0; 

  isLoaded:boolean = true;


  features:Feature[] = [];
  featureUpdate: Feature = new Feature(0, "", 0);
  totalFeatures: number = 0; 




  constructor(private backendFeatureService: BackendFeatureService,private backendLoginService:BackendLoginService, private router: Router, private backendClaimService: BackendClaimService) { }

  ngOnInit(): void {
    this.ViewAllCustomers();
    this.loadPoliciesToComponent();
    this.loadAllFeaturesToComponent()
  }

  ViewAllCustomers(){
    this.backendLoginService.getAllCustomers().subscribe(
      {
        next:(data)=>{console.log(data);
          this.user = data;
          this.totalUsers = this.user.length;
          
        },
        error:(err)=>{console.log(err);}
      }
    )
  }


  loadPoliciesToComponent(){
    this.isLoaded = false;
    this.backendClaimService.getAllClaims().subscribe(
      {
          next: (data)=>{
          console.log(data)
          this.isLoaded = true;
          this.claims = data
          this.totalClaims = this.claims.length;
          
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

  loadAllFeaturesToComponent(){
    this.backendFeatureService.getAllFeatures().subscribe({
      
      next:(data)=>{
      console.log(data);
      this.features=data;
      this.totalFeatures = this.features.length;
    },
      error:(e)=>{console.log(e)}
    })
  }


  backToHome(){
    this.router.navigate(['/admin/home']);
  }

}
