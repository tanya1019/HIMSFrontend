import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/User';
import { BackendRegisterUserService } from 'src/app/services/backend-register-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  logInForm=this.formBuilder.group(
    {
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
   
    }
   );
  user: User = new User("","",0,"","");
  message: string = "";
  errorMessage: string = "";
  

  constructor(private router: Router,private registerUserService: BackendRegisterUserService ,private formBuilder:FormBuilder) { }

  ngOnInit(): void {}

  userRegistration( userregistrationform: NgForm){
    userregistrationform.form.reset();
    this.registerUserService.registerUser(this.user).subscribe({
      next:()=> {
        console.log("Registration Successful");
        this.router.navigate([""])
        this.errorMessage= "";
      },
      error: (err)=> {
        alert(err.error.text)
        this.message= "";
        this.errorMessage= "Registration Failed...Try again";}

    })
}

}
