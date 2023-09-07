import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePropertyComponent } from './components/create-property/create-property.component';
import { MyPropertiesComponent } from './components/my-properties/my-properties.component';
import { CreateFeatureComponent } from './components/create-feature/create-feature.component';
import { CreateAdminPolicyComponent } from './components/create-admin-policy/create-admin-policy.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

import { DisplayAllAdminPoliciesComponent } from './components/display-all-admin-policies/display-all-admin-policies.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePropertyComponent,
    MyPropertiesComponent,
<<<<<<< HEAD
    CreateAdminPolicyComponent,
    AdminLoginComponent,
    UserLoginComponent,
    CreateUserComponent,
  
    DisplayAllAdminPoliciesComponent,
   
=======
    CreateFeatureComponent,
    CreateAdminPolicyComponent
>>>>>>> 10ac43bac989d0e0e49fadd0ef6d27c60f8729db
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
