System.register(['angular2/core', 'angular2/router', './posts.service', './spinn.component'], function(exports_1, context_1) {
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
    var core_1, router_1, posts_service_1, spinn_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (spinn_component_1_1) {
                spinn_component_1 = spinn_component_1_1;
            }],
        execute: function() {
            //import {PanelComponent} from './panel.component';
            PostsComponent = (function () {
                function PostsComponent(_service) {
                    this._service = _service;
                    this.isLoadin = true;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getPosts()
                        .subscribe(function (posts) { return _this.posts = posts; }, null, function () { _this.isLoadin = false; });
                };
                PostsComponent.prototype.select = function (post) {
                    this.currentPost = post;
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts.component.html',
                        styles: ["\n         .posts li { cursor: default; }\n         .posts li:hover { background: #ecf0f1; } \n         .list-group-item.active, \n         .list-group-item.active:hover, \n         .list-group-item.active:focus { \n             background-color: #ecf0f1;\n             border-color: #ecf0f1; \n             color: #2c3e50;\n         }\n     "],
                        providers: [posts_service_1.PostService],
                        directives: [router_1.RouterLink, spinn_component_1.SpinComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map