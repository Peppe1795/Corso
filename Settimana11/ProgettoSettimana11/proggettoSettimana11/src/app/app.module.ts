import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';

import { AppComponent } from './app.component';
import { SinginComponent } from './auth/singin/singin.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "login",
   component: LoginComponent
  },
  {
    path: "singin",
   component: SinginComponent
  },
  {
    path: "movies",
   component: MoviesComponent,
   canActivate: [AuthGuard]

  },
  {
    path: "profile",
   component: ProfileComponent,
   canActivate: [AuthGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    LoginComponent,
    NavbarComponent,
    MoviesComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
