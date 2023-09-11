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
import { PremiumCalculatorComponent } from './components/premium-calculator/premium-calculator.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PolicyPaymentsComponent } from './components/policy-payments/policy-payments.component';
import { CreateOwnedPolicyComponent } from './components/create-owned-policy/create-owned-policy.component';
import { UserClaimComponent } from './components/user-claim/user-claim.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { AdminGetAllCustomersComponent} from './components/admin-get-all-customers/admin-get-all-customers.component';
 
const routes: Routes = [
  {path:'home', component: HomePageComponent},
  {path : 'addproperty', component:CreatePropertyComponent},
  {path : 'myProperty', component:MyPropertiesComponent},
  {path : 'admin/policy', component:CreateAdminPolicyComponent},
  {path : 'admin/login', component:AdminLoginComponent},
  {path : '', component:UserLoginComponent},
  {path : 'register', component:CreateUserComponent},
  {path : 'admin/displaypolicy', component:DisplayAllAdminPoliciesComponent},
  {path : 'feature', component:CreateFeatureComponent},
  {path : 'features', component:DisplayAllFeaturesComponent},
  {path : 'profile', component:ProfileComponent},
  {path : 'payments', component:PolicyPaymentsComponent},
  {path:'home',component:HomePageComponent},
  {path:'ownedPolicy', component:CreateOwnedPolicyComponent},
  {path : 'premium',component:PremiumCalculatorComponent},
  {path:'claim' ,component:UserClaimComponent},
  {path:'admin/home', component:AdminHomePageComponent},
  {path:'admin/customers', component:AdminGetAllCustomersComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
