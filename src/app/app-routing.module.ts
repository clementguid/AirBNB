import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDetailsComponent } from './components/page-details/page-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, /* Route vers la page d'accueil par défaut */
  { path: 'home', component: HomeComponent }, /* Route vers le composant home */
  { path: 'page-details', component: PageDetailsComponent }, /* Route vers le composant page-details */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
