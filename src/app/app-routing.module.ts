import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatesComponent } from './associates/associates.component';
import { ConversationComponent } from './conversation/conversation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { LearingResourcesComponent } from './learing-resources/learing-resources.component';
import { OnboardingPrerequisitesComponent } from './onboarding-prerequisites/onboarding-prerequisites.component';
import { PracticeComponent } from './practice/practice.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: "", component: AssociatesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "practice", component: PracticeComponent },
  { path: "profile", component: ProfileComponent},
  { path: "conversation", component: ConversationComponent },
  { path: "groupDiscussion", component: GroupDiscussionComponent },
  { path: "onboarding" , component: OnboardingPrerequisitesComponent},
  { path: "learning" , component : LearingResourcesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
