import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/User';
import { BackendUserLoginService } from '../../services/backend-user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User("","",0,"","");
  constructor(private loginUserService: BackendUserLoginService) { }

  imgSrc5="../assets/loginImg.avif";

  ngOnInit(): void {
  }
  userLogin(){
    this.loginUserService.loginUser(this.user).subscribe({
      next:()=> {
        console.log("Login Successful");
      },
      error: (err)=> {alert(err.error.text)}

    })

    
}
}
