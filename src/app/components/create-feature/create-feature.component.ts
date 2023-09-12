import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Feature } from 'src/app/class/Feature';
import { BackendFeatureService } from 'src/app/services/backend-feature.service';


@Component({
  selector: 'app-create-feature',
  templateUrl: './create-feature.component.html',
  styleUrls: ['./create-feature.component.css']
})
export class CreateFeatureComponent implements OnInit {

  feature: Feature={
    id:0,
    featureName:"",
    percent:0
  };

  constructor(private router: Router, private backendFeatureService: BackendFeatureService) { }
  
  ngOnInit(): void {
  }

  addFeature(featureForm:NgForm){
    
    this.backendFeatureService.postFeature(this.feature)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.feature = data;
        featureForm.form.reset();
      },
      error:(err)=>{console.log(err)}
      
    })
    this.feature = new Feature(0,"",0)
  }
}
