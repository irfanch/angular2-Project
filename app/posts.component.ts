import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {PostService} from './posts.service';
import {SpinComponent} from './spinn.component';

@Component({
    templateUrl: 'app/posts.component.html',
    providers: [PostService],
    directives:[RouterLink, SpinComponent]
})

export class PostsComponent implements OnInit{
    isLoadin = true;
      posts : any[];

    constructor(private _service:PostService){

    }

    ngOnInit(){
            this._service.getPosts()
                 .subscribe(posts => this.posts = posts,
                  null,
                  () => {this.isLoadin = false;} 
                  );
    }

 }