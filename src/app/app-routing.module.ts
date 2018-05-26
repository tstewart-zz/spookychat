import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuhNavComponent } from './muh-nav/muh-nav.component';
import { MuhDashComponent } from './muh-dash/muh-dash.component';
import { MuhTableComponent } from './muh-table/muh-table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'muh-nav', component: MuhNavComponent},
  { path: 'muh-dash', component: MuhDashComponent},
  { path: 'muh-table', component: MuhTableComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MuhNavComponent, MuhDashComponent, MuhTableComponent, HomeComponent]