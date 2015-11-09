var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/jsMain/mainTmpl.html',
            controller: 'mainCtrl'
        })

        .state('basics', {
            url: '/basics',
            templateUrl: 'jsBasics/basicsTmpl.html',
            controller: 'basicsCtrl'
        })

        .state('teams', {
            url: '/basics/:protein',
            templateUrl: 'jsBasics/basics/basicsTmpl.html',
            controller: 'basicsCtrl',
            resolve: {
            teamData: function (mainService, $stateParams) {
                    return mainService.getbasicsData($stateParams.basics)
                }
            }
        })

    $urlRouterProvider
        .otherwise('/');
});