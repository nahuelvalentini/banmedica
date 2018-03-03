import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StepsComponent } from './components/steps/steps.component';
import { LogoComponent } from './micro-components/logo/logo.component';
import { BanmedInputComponent } from './micro-components/banmed-input/banmed-input.component';

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
    BanmedInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
