import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/User';
import { BackendUserLoginService } from '../../services/backend-user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User("","",0,"","");
  message: string = "";
  errorMessage: string = "";

  constructor(private router: Router,private loginUserService: BackendUserLoginService) { }

  ngOnInit(): void {
  }
  userLogin(){
    this.loginUserService.loginUser(this.user).subscribe({
      next:(data)=> {

        // console.log("Login Successful" + JSON.stringify(data));
        localStorage.setItem("user" , JSON.stringify(data))
        this.message= "Registration Successful";
        this.router.navigate(["/home"])
        this.errorMessage= "";
        
      },
      error: (err)=> {
        // alert(err.error.text)
        this.message= "Registration Failed";
        this.errorMessage= "Registration Failed...Try again";
      }

    })

    
}
}
