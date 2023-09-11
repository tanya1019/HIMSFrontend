import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/User';
import { BackendLoginService } from 'src/app/services/backend-admin-login.service';

@Component({
  selector: 'app-admin-get-all-customers',
  templateUrl: './admin-get-all-customers.component.html',
  styleUrls: ['./admin-get-all-customers.component.css']
})
export class AdminGetAllCustomersComponent implements OnInit {

  user: User[] = [];

  constructor(private backendLoginService:BackendLoginService) { }


  ngOnInit(): void {
    this.ViewAllCustomers();
  }

  ViewAllCustomers(){
    this.backendLoginService.getAllCustomers().subscribe(
      {
        next:(data)=>{console.log(data);
          this.user = data;
          
        },
        error:(err)=>{console.log(err);}
      }
    )
  }

}
