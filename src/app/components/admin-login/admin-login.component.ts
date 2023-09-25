import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/class/Admin';
import { BackendLoginService } from 'src/app/services/backend-admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin = new Admin("","");
  message: string = "";
  errorMessage: string = "";

  constructor(private router: Router, private loginUserService: BackendLoginService) { }

  ngOnInit(): void {
  }

  adminLogin(){
    console.log(this.admin);
    this.loginUserService.loginUser(this.admin).subscribe({
      next:(data)=> {
        console.log("Login Successful" + JSON.stringify(data));
        localStorage.setItem("user" , JSON.stringify(data))
        this.message= "login Successful";
        this.router.navigate(["/admin/home"])
        this.errorMessage= "";
      },
      error: (err)=> {
        // alert(err.error.text)
        this.message= "";
        this.errorMessage= "login Failed...Try again";
      }

    })
}
}
