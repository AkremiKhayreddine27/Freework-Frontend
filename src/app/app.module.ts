import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { ListContestComponent } from './components/contests/list-contest/list-contest.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContestComponent } from './components/contests/list-contest/contest/contest.component';
import { ShowContestComponent } from './components/contests/show-contest/show-contest.component';
import { ListEntryComponent } from './components/contests/entries/list-entry/list-entry.component';
import { EntryComponent } from './components/contests/entries/list-entry/components/entry/entry.component';
import { ShowEntryComponent } from './components/contests/entries/show-entry/show-entry.component';
import { CreateEntryComponent } from './components/contests/entries/create-entry/create-entry.component';
import { EditEntryComponent } from './components/contests/entries/edit-entry/edit-entry.component';
import { CreateContestComponent } from './components/contests/create-contest/create-contest.component';



import { ContestService } from './services/contest.service';
import { EntryService } from './services/entry.service';
import { UserService } from './services/user.service';
import { FreelancerService } from './services/freelancer.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';



const appRoutes:Routes = [
  {path:'contests',component:ListContestComponent }, 
  {path:'contests/create',component:CreateContestComponent},
  {path:'contests/:id',component:ShowContestComponent},
  {path:'contests/:id/entries/create',component:CreateEntryComponent},
  {path:'entries/:id',component:ShowEntryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListContestComponent,
    NavbarComponent,
    FooterComponent,
    ContestComponent,
    ShowContestComponent,
    ListEntryComponent,
    EntryComponent,
    ShowEntryComponent,
    CreateEntryComponent,
    EditEntryComponent,
    CreateContestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng4LoadingSpinnerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ContestService,
    EntryService,
    UserService,
    FreelancerService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
