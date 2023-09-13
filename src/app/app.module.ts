import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { NavbarComponent } from './components/navbar/navbar.component';
import { PolicyPaymentsComponent } from './components/policy-payments/policy-payments.component';
import { CreateOwnedPolicyComponent } from './components/create-owned-policy/create-owned-policy.component';
import { UserClaimComponent } from './components/user-claim/user-claim.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { AdminGetAllCustomersComponent } from './components/admin-get-all-customers/admin-get-all-customers.component';
import { DisplayAllCustomerPolicyComponent } from './components/display-all-customer-policy/display-all-customer-policy.component';
import { ApplicablePoliciesComponent } from './components/applicable-policies/applicable-policies.component';
import { MyPoliciesComponent } from './components/my-policies/my-policies.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { DisplayAllClaimsComponent } from './components/display-all-claims/display-all-claims.component';





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
    CreateOwnedPolicyComponent,
    DisplayAllAdminPoliciesComponent,
    UserClaimComponent,
    CreateFeatureComponent,
        NavbarComponent,
        PolicyPaymentsComponent,
        AdminHomePageComponent,
        AdminGetAllCustomersComponent,
        DisplayAllCustomerPolicyComponent,
        ApplicablePoliciesComponent,
        MyPoliciesComponent,
        AdminNavbarComponent,
        DisplayAllClaimsComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
