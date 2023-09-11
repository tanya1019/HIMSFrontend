import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/class/Property';
import { BackendPropertyService } from 'src/app/services/backend-property';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent implements OnInit {

  constructor(private backendPropertyService: BackendPropertyService) { }

  properties: Property[] = []
  message : string = ""
  errorMessage : string = ""
  isLoaded : Boolean = false;
  customerId: number = JSON.parse(String(localStorage.getItem("user"))).id


  ngOnInit(): void {

    this.loadPropertiesToComponent(this.customerId);
  }



  loadPropertiesToComponent(custId: number){
   
    this.isLoaded = false;
    this.backendPropertyService.getPropertyById(custId).subscribe(
      {
          next: (data)=>{
          console.log(data)
          // console.log(user.data.id)
          // console.log("------->" + JSON.parse(localStorage.getItem("user")))
          this.isLoaded = true;
          this.properties = data

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
