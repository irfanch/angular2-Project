System.register(['angular2/core', './navbar.component', 'angular2/router', './posts.component', './user.component', './notfound.component', './newuser.component', './home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navbar_component_1, router_1, posts_component_1, user_component_1, notfound_component_1, newuser_component_1, home_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (notfound_component_1_1) {
                notfound_component_1 = notfound_component_1_1;
            },
            function (newuser_component_1_1) {
                newuser_component_1 = newuser_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/user/', name: 'User', component: user_component_1.UserComponent },
                        { path: '/user/new', name: 'NewUser', component: newuser_component_1.NewUserComponent },
                        { path: '/user/:id', name: 'EditUser', component: newuser_component_1.NewUserComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/notfound', name: 'NotFound', component: notfound_component_1.NotFoundComponent },
                        { path: '/*other', name: 'Othert', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "<navbar></navbar>\n                <div class=\"container\">\n                <router-outlet></router-outlet>    \n                </div>",
                        directives: [navbar_component_1.NavBarComponent, router_1.ROUTER_DIRECTIVES, posts_component_1.PostsComponent, user_component_1.UserComponent, home_component_1.HomeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map