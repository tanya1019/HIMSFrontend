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


 
const routes: Routes = [
  {path : 'addproperty', component:CreatePropertyComponent},
  {path : 'myProperty', component:MyPropertiesComponent},
  {path : 'admin/policy', component:CreateAdminPolicyComponent},
  {path : 'admin/login', component:AdminLoginComponent},
  {path : '', component:UserLoginComponent},
  {path : 'register', component:CreateUserComponent},
  {path : 'admin/displaypolicy', component:DisplayAllAdminPoliciesComponent},
  {path : 'feature', component:CreateFeatureComponent},
  {path : 'features', component:DisplayAllFeaturesComponent},

  {path : 'admin/policy', component:CreateAdminPolicyComponent},
  {path:'home',component:HomePageComponent},
  {path : 'premium',component:PremiumCalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
