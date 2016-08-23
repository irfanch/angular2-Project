import {Control} from 'angular2/common';

export class BasicValidator{

    static email(control: Control){
        var regExp = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        var valid = regExp.test(control.value);
        return valid ? null : {email: true};
    }
}