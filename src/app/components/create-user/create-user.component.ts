import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/User';
import { BackendRegisterUserService } from 'src/app/services/backend-register-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User("","123",0,"","");
  message: string = "";
  errorMessage: string = "";

  constructor(private router: Router,private registerUserService: BackendRegisterUserService) { }

  ngOnInit(): void {}

  userRegistration( userregistrationform: NgForm){
    
    this.registerUserService.registerUser(this.user).subscribe({
      next:()=> {
        // console.log("Registration Successful");
        this.message= "login Successful";
        this.router.navigate([""])
        this.errorMessage= "";
        userregistrationform.form.reset();
      },
      error: (err)=> {
        alert(err.error.text)
        this.message= "";
        this.errorMessage= "Registration Failed...Try again";}

    })
}

}
