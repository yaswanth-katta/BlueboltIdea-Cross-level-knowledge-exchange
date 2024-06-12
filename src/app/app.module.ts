import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PracticeComponent } from './practice/practice.component';
import { ProfileComponent } from './profile/profile.component';
import { AssociatesComponent } from './associates/associates.component';
import { ConversationComponent } from './conversation/conversation.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PracticeComponent,
    ProfileComponent,
    AssociatesComponent,
    ConversationComponent,
    GroupDiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
