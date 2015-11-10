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
        .state('macros', {
            url: '/basics/:macronutrients',
            templateUrl: '/jsBasics/macrosTmpl.html',
            controller: 'macrosCtrl',
            resolve: {
                resolvedData: function (mainService, $stateParams) {
                    return mainService.getData($stateParams.macronutrients)
                }
            }
        })






    // .state('proteins', {
    //     url: '/basics/:proteins',
    //     templateUrl: 'jsBasics/basics/basicsTmpl.html',
    //     controller: 'basicsCtrl',
    //     resolve: {
    //        myData: function (mainService, $stateParams) {
    //             return mainService.getbasicsData($stateParams.basics)
    //         }
    //     }
    // })
    // .state('carbohydrates', {
    //     url: '/basics/:carbohydrates',
    //     templateUrl: 'jsBasics/basics/basicsTmpl.html',
    //     controller: 'basicsCtrl',
    //     resolve: {
    //         teamData: function (mainService, $stateParams) {
    //             return mainService.getbasicsData($stateParams.basics)
    //         }
    //     }
    // })
    // .state('lipids', {
    //     url: '/basics/:lipids',
    //     templateUrl: 'jsBasics/basics/basicsTmpl.html',
    //     controller: 'basicsCtrl',
    //     resolve: {
    //         teamData: function (mainService, $stateParams) {
    //             return mainService.getbasicsData($stateParams.basics)
    //         }
    //     }
    // })

    $urlRouterProvider
        .otherwise('/');
});