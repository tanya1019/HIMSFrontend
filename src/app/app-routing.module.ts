import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PolicyPaymentsComponent } from './components/policy-payments/policy-payments.component';
import { CreateOwnedPolicyComponent } from './components/create-owned-policy/create-owned-policy.component';
import { UserClaimComponent } from './components/user-claim/user-claim.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { AdminGetAllCustomersComponent} from './components/admin-get-all-customers/admin-get-all-customers.component';
import { DisplayAllCustomerPolicyComponent } from './components/display-all-customer-policy/display-all-customer-policy.component';
import { ApplicablePoliciesComponent } from './components/applicable-policies/applicable-policies.component';
import { MyPoliciesComponent } from './components/my-policies/my-policies.component';
import { DisplayAllClaimsComponent } from './components/display-all-claims/display-all-claims.component';
 
const routes: Routes = [
  {path:  'home', component: HomePageComponent},
  {path : 'addproperty', component:CreatePropertyComponent},
  {path : 'myProperty', component:MyPropertiesComponent},
  {path : 'admin/policy', component:CreateAdminPolicyComponent},
  {path : 'admin/login', component:AdminLoginComponent},
  {path : '', component:UserLoginComponent},
  {path : 'register', component:CreateUserComponent},
  {path : 'admin/displaypolicy', component:DisplayAllAdminPoliciesComponent},
  {path : 'feature', component:CreateFeatureComponent},
  {path : 'features', component:DisplayAllFeaturesComponent},
  {path : 'payments/:premiumamount', component:PolicyPaymentsComponent},
  {path:'home',component:HomePageComponent},
  {path:'ownedPolicy/:adminpolicyid', component:CreateOwnedPolicyComponent},
  {path:'claim/:ownedpolicyid' ,component:UserClaimComponent},
  {path:'admin/home', component:AdminHomePageComponent},
  {path:'admin/customers', component:AdminGetAllCustomersComponent},
  {path :'displaypolicy', component:DisplayAllCustomerPolicyComponent},
  {path:'applicable', component:ApplicablePoliciesComponent},
  {path:'mypolicies', component:MyPoliciesComponent},
  {path:'admin/claims', component:DisplayAllClaimsComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
