import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {PostService} from './posts.service';
import {SpinComponent} from './spinn.component';
//import {PanelComponent} from './panel.component';

@Component({
    templateUrl: 'app/posts.component.html',
    styles: [`
         .posts li { cursor: default; }
         .posts li:hover { background: #ecf0f1; } 
         .list-group-item.active, 
         .list-group-item.active:hover, 
         .list-group-item.active:focus { 
             background-color: #ecf0f1;
             border-color: #ecf0f1; 
             color: #2c3e50;
         }
     `],
    providers: [PostService],
    directives:[RouterLink, SpinComponent]
})

export class PostsComponent implements OnInit{
    isLoadin = true;
      posts : any[];
      currentPost;

    constructor(private _service:PostService){

    }

    ngOnInit(){
            this._service.getPosts()
                 .subscribe(posts => this.posts = posts,
                  null,
                  () => {this.isLoadin = false;} 
                  );
    }

    select(post){
            this.currentPost = post;
    }
 }