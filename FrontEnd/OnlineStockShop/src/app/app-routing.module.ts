import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Pages/home/home.component';
import {AdvertismentsComponent} from './Pages/advertisments/advertisments.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'advertisments', component: AdvertismentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
