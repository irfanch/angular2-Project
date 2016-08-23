import {Component} from 'angular2/core';
import {NavBarComponent} from './navbar.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {PostsComponent} from './posts.component';
import {UserComponent} from './user.component';
import {NotFoundComponent} from './notfound.component';
import {NewUserComponent} from './newuser.component';
import {HomeComponent} from './home.component';

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/user/', name: 'User', component: UserComponent},
    {path: '/user/new', name: 'NewUser', component: NewUserComponent},
    {path: '/user/:id', name: 'EditUser', component: NewUserComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/notfound', name: 'NotFound', component:NotFoundComponent},
    {path: '/*other', name: 'Othert', redirectTo: ['Home']}
])


@Component({
    selector: 'my-app',
    template: `<navbar></navbar>
                <div class="container">
                <router-outlet></router-outlet>    
                </div>`,
    directives: [NavBarComponent, ROUTER_DIRECTIVES, PostsComponent, UserComponent, HomeComponent ]
})
export class AppComponent { }