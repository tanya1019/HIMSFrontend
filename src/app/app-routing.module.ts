import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePropertyComponent } from './components/create-property/create-property.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path : '', component:CreatePropertyComponent},
  {path:'home',component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
