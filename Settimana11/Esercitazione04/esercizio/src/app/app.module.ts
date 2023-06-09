import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'active-posts',
        component: ActivePostsComponent,
    },
    {
        path: 'inactive-posts',
        component: InactivePostsComponent,
    },
    {
        path: 'active-posts/:id',
        component: PostDetailsComponent,
    },
    {
        path: 'inactive-posts/:id',
        component: PostDetailsComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: ':id',
                component: UserDetailsComponent,
            },
        ],
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        PostCardComponent,
        PostDetailsComponent,
        UsersComponent,
        UserDetailsComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
