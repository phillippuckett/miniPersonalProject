var app = angular.module('myApp', [])

app.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'directiveFiles/dirTmpl.html',
            controller: 'mainCtrl'
        })


    $urlRouterProvider
        .otherwise('/');
});