import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePropertyComponent } from './components/create-property/create-property.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyPropertiesComponent } from './components/my-properties/my-properties.component';
import { CreateFeatureComponent } from './components/create-feature/create-feature.component';
import { CreateAdminPolicyComponent } from './components/create-admin-policy/create-admin-policy.component';
import { DisplayAllFeaturesComponent } from './components/display-all-features/display-all-features.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DisplayAllAdminPoliciesComponent } from './components/display-all-admin-policies/display-all-admin-policies.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePropertyComponent,
    HomePageComponent,
    MyPropertiesComponent,
    CreateFeatureComponent,
    CreateAdminPolicyComponent,
    DisplayAllFeaturesComponent,
    CreateAdminPolicyComponent,
    AdminLoginComponent,
    UserLoginComponent,
    CreateUserComponent,
  
    DisplayAllAdminPoliciesComponent,
   
    CreateFeatureComponent
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
