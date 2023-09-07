import { Component, OnInit } from '@angular/core';
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

  addFeature(){
    this.backendFeatureService.postFeature(this.feature)
    .subscribe({
      next:(data)=>{console.log(data)},
      error:(err)=>{console.log(err)}
      
    })
    this.feature = new Feature(0,"",0)
  }
}
