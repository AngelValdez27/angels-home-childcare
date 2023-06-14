import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SplashComponent } from './components/splash/splash.component';
import { CommunityComponent } from './components/community/community.component';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'home', component: NavbarComponent },
  { path: 'splash', component: SplashComponent },
  { path: 'community', component: CommunityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
