import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from 'src/app/class/Feature';
import { BackendFeatureService } from 'src/app/services/backend-feature.service';

@Component({
  selector: 'app-display-all-features',
  templateUrl: './display-all-features.component.html',
  styleUrls: ['./display-all-features.component.css']
})
export class DisplayAllFeaturesComponent implements OnInit {

  message: string = "";
  errorMessage: string = "";

  features:Feature[] = [];

  isUpdate: boolean = false;
  isUpdateSuccess: boolean = false;
  featureUpdate: Feature = new Feature(0, "", 0);

  constructor(private backendFeatureService: BackendFeatureService ,private router:Router) {

   }

  ngOnInit(): void {
    this.loadAllFeaturesToComponent();

  }
  loadAllFeaturesToComponent(){
    this.backendFeatureService.getAllFeatures().subscribe({
      
      next:(response)=>{console.log(response);
      this.features=response;},
      error:(e)=>{console.log(e)}
    })
  }

  deleteFeatureById(deleteID: number) {
    if (confirm("Do you want to delete this Feature")) {
      // console.log("delete method:" + deleteID);
      this.backendFeatureService.deleteFeaturetById(deleteID)
        .subscribe(
          {
            next: (data) => {
              console.log(data);
              this.loadAllFeaturesToComponent();
              this.message = "Feature deleted.";
              this.errorMessage = "";
            },
            error: (error) => {
              console.log(error);
              this.errorMessage = "Could not delete Feature.";
              this.message = "";
            }
          }
        );
    }
  }

  updateFeature(feature: Feature) {
    this.isUpdate = true;
    this.featureUpdate = feature;
  }

  updateFeatureSubmit() {
    console.log(this.featureUpdate);
    this.backendFeatureService.updateFeature(this.featureUpdate).
    subscribe({
      next: (data) => {
        console.log(data);
        this.message = "Feature Updated.";
        this.errorMessage = "";
      },
      error: (error) => {
        console.log(error);
        this.errorMessage = "Could not update Feature.";
        this.message = "";
      }
    });
    this.isUpdate = false;
    this.isUpdateSuccess = true;
  }

  
  backToHome(){
    this.router.navigate(["/admin/home"]);
  }


}
