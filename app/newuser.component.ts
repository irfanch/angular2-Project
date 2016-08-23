import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, CanDeactivate, Router, RouteParams} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {BasicValidator} from './basicValidators';
import {UserService} from './user.service';
import {User} from './user';


@Component({
    templateUrl: 'app/newuser.component.html',
    directives:[ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class NewUserComponent implements OnInit, CanDeactivate{ 

    form: ControlGroup;
    title: string;
    user = new User();

    constructor(fb: FormBuilder,
                private _router:Router,
                private _routeParams:RouteParams,
                private _userService: UserService){
        
        this.form =fb.group({
            name: ['', Validators.required],
			email: ['', BasicValidator.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
            })
        });
    }
     ngOnInit(){
        var id = this._routeParams.get("id");

        this.title = id ? "EditUser" : "NewUser";

        if (!id)
            return;

        this._userService.getUser(id)
                        .subscribe(user => this.user = user,
                                    response => {
                                            if (response.status == 404){
                                                this._router.navigate(['NotFound']);
                                            }
                                    } );
    }
    routerCanDeactivate(){
            if (this.form.dirty)
                return confirm('You have unsaved Changes. Are you sure you want to navigate away?');

            return true;
    }
    save(){
        var result;
        if (this.user.id)
            result = this._userService.updateUser(this.form.value)
                                .subscribe( x=> {this._router.navigate(['User']);
            });
        else
            result = this._userService.addUser(this.form.value)
                                .subscribe( x=> {this._router.navigate(['User']);
            });
    }
   
}

