import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountriesModule } from './countries/countries.module';

// const BASE_URL = 'angular-de-cero-a-experto/04-country-app-deploy/';
const BASE_URL = '';

const routes: Routes = [
  // {
  //   path: `${BASE_URL}home`,
  //   component: HomePageComponent
  // },
  {
    path: ``,
    component: HomePageComponent,
  },
  {
    path: `about`,
    component: AboutPageComponent
  },
  {
    path: `contact`,
    component: ContactPageComponent
  },
  {
    path: `countries`,
    loadChildren: () => import('./countries/countries.module')
      .then(module => module.CountriesModule)
  },
  {
    path: '**',
    redirectTo: "",
  },
  // {
  //   path: '**',
  //   redirectTo: "/home",
  //   pathMatch: "full"
  // },
  // {
  //   path: '',
  //   redirectTo: "/home",
  //   pathMatch: "full"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
