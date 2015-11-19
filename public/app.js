/// <reference path="../typings/angularjs/angular.d.ts"/>
var mainApplicationModuleName = "main";
// declare angular module
var mainApplicationModule = angular.module(mainApplicationModuleName, []);
// wait for document to load before bootstrapping angular application
angular.element(document).ready(function () {
    // now manually bootstrap the angular app
    angular.bootstrap(document, [mainApplicationModuleName]);
});
//# sourceMappingURL=app.js.map