import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveswedesComponent } from "./activeswedes/activeswedes.component";
import { StatsComponent } from "./stats/stats.component";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  { path: 'activeswedes', component: ActiveswedesComponent},
  { path: 'stats/:id', component: StatsComponent },
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
