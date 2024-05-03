import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

const gitDomain = "angular-de-cero-a-experto/04-country-app-deploy/"
const routes: Routes = [
  {
    path: gitDomain + 'home',
    component: HomePageComponent
  },
  {
    path: gitDomain + 'about',
    component: AboutPageComponent
  },
  {
    path: '**',
    redirectTo: gitDomain + "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
