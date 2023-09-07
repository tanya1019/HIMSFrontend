import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePropertyComponent } from './components/create-property/create-property.component';
import { MyPropertiesComponent } from './components/my-properties/my-properties.component';
import { CreateFeatureComponent } from './components/create-feature/create-feature.component';
import { CreateAdminPolicyComponent } from './components/create-admin-policy/create-admin-policy.component';

const routes: Routes = [
  {path : '', component:CreatePropertyComponent},
  {path : 'myProperty', component:MyPropertiesComponent},
  {path : 'feature', component:CreateFeatureComponent},

  {path : 'admin/policy', component:CreateAdminPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
