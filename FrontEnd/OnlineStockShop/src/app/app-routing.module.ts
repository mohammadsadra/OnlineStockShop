import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Pages/home/home.component';
import {AdvertismentsComponent} from './Pages/advertisments/advertisments.component';
import {CreateAdComponent} from "./Pages/create-ad/create-ad.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'advertisments', component: AdvertismentsComponent},
  {path: 'create-ad', component: CreateAdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
