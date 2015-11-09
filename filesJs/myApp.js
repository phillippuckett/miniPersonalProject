var app = angular.module('myApp', [])

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'mainCtrl'
        })

        .state('search', {
            url: '/search',
            templateUrl: 'directiveFiles/dirTmpl.html',
            controller: 'mainCtrl'
        })


    $urlRouterProvider
        .otherwise('/');
});