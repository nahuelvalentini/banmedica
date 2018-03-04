import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StepsComponent } from './components/steps/steps.component';
import { LogoComponent } from './micro-components/logo/logo.component';
import { BanmedInput1Component } from './micro-components/banmed-input-1/banmed-input-1.component';
import { BanmedBreadcrumbsComponent } from './micro-components/banmed-breadcrumbs/banmed-breadcrumbs.component';

const appRoutes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Inicio' }
  },
  {
    path: 'pasos',
    component: StepsComponent,
    data: { title: 'Pasos' }
  },
  { path: 'p2',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepsComponent,
    LogoComponent,
    BanmedInput1Component,
    BanmedBreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
