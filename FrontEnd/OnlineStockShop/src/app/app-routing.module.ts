import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Pages/home/home.component';
import {AdvertismentsComponent} from './Pages/advertisments/advertisments.component';
import {NewAdvertisementComponent} from './Pages/new-advertisement/new-advertisement.component';
import {CategoryComponent} from './Pages/category/category.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'advertisments', component: AdvertismentsComponent},
  {path: 'newAd', component: NewAdvertisementComponent},
  {path: 'category', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
