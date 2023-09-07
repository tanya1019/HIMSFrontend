import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/class/Admin';
import { BackendLoginService } from 'src/app/services/backend-admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin = new Admin("","");
  constructor(private loginUserService: BackendLoginService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.admin);
    this.loginUserService.loginUser(this.admin).subscribe({
      next:(data)=> {
        console.log(data)
      },
      error: (err)=> {alert(err.error.text)}

    })
}
}
