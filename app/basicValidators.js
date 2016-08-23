System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BasicValidator;
    return {
        setters:[],
        execute: function() {
            BasicValidator = (function () {
                function BasicValidator() {
                }
                BasicValidator.email = function (control) {
                    var regExp = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
                    var valid = regExp.test(control.value);
                    return valid ? null : { email: true };
                };
                return BasicValidator;
            }());
            exports_1("BasicValidator", BasicValidator);
        }
    }
});
//# sourceMappingURL=basicValidators.js.map