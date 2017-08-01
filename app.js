var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/PageTab");

     $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "views/PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "views/Page1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "views/Page2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "views/Page3.html"
        });
});