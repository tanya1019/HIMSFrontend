import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePropertyComponent } from './components/create-property/create-property.component';
import { MyPropertiesComponent } from './components/my-properties/my-properties.component';
import { CreateAdminPolicyComponent } from './components/create-admin-policy/create-admin-policy.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DisplayAllAdminPoliciesComponent } from './components/display-all-admin-policies/display-all-admin-policies.component';

const routes: Routes = [
  {path : '', component:CreatePropertyComponent},
  {path : 'myProperty', component:MyPropertiesComponent},
  {path : 'admin/policy', component:CreateAdminPolicyComponent},
  {path : 'admin/login', component:AdminLoginComponent},
  {path : 'login', component:UserLoginComponent},
  {path : 'register', component:CreateUserComponent},
  {path : 'admin/displaypolicy', component:DisplayAllAdminPoliciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
