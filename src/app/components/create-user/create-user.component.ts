import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/User';
import { BackendRegisterUserService } from 'src/app/services/backend-register-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User("","",0,"","");

  constructor(private registerUserService: BackendRegisterUserService) { }

  ngOnInit(): void {}

  userRegistration(){
    this.registerUserService.registerUser(this.user).subscribe({
      next:()=> {
        console.log("Registration Successful");
      },
      error: (err)=> {alert(err.error.text)}

    })
}

}