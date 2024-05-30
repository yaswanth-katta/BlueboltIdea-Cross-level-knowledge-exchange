import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatesComponent } from './associates/associates.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PracticeComponent } from './practice/practice.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"practice",component:PracticeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"associates",component:AssociatesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
