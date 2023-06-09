import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { SinginComponent } from './auth/singin/singin.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Route[] = [
  {
    path: "",
   component: LoginComponent
  },
  {
    path: "singin",
   component: SinginComponent
  },
  {
    path: "movies",
   component: MoviesComponent
  },
  {
    path: "profile",
   component: ProfileComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    LoginComponent,
    NavbarComponent,
    MoviesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
