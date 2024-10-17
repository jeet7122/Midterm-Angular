import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {AccountListComponent} from './app/account-list/account-list.component';
import {AccountDetailsComponent} from './app/account-details/account-details.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';

const routes:Routes = [  {path: "", redirectTo:'/accounts', pathMatch: "full"},
                {path: 'accounts', component: AccountListComponent},
                {path: 'accounts/:id', component: AccountDetailsComponent},
                {path: '**', component: PageNotFoundComponent}];


bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]}).then(re => console.log('Bootstrap successful'));















