var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/jsMain/mainTmpl.html',
            controller: 'mainCtrl'
        })

/* THIS IS THE SECTION TO RETRIEVE THE NUTRITION BASICS SECTION OF MYAPP*/ 

        .state('basics', {
            url: '/basics',
            templateUrl: 'jsBasics/basicsTmpl.html',
            controller: 'basicsCtrl'
        })
        .state('macros', {
            url: '/basics/:macronutrients',
            templateUrl: '/jsBasics/macMicTmpl.html',
            controller: 'macMicCtrl',
            resolve: {
                resolvedData: function (mainService, $stateParams) {
                    return mainService.getData($stateParams.macronutrients)
                }
            }
        })
        .state('micros', {
            url: '/basics/:micronutrients',
            templateUrl: '/jsBasics/macMicTmpl.html',
            controller: 'micMicCtrl',
            resolve: {
                resolvedData: function (mainService, $stateParams) {
                    return mainService.getData($stateParams.micronutrients)
                }
            }
        })
        
/* THIS IS THE SECTION TO RETRIEVE THE NUTRITIONAL FACTS SECTION OF MYAPP*/  

        .state('facts', {
            url: '/facts',
            templateUrl: '/jsFacts/factsTmpl.html',
            controller: 'factsCtrl',
        })
        .state('factsInquiry', {
            url: '/facts/:orgFacts',
            templateUrl: 'jsFacts/orgFactsTmpl.html',
            controller: 'orgFactsCtrl',
            resolve: {
                resolvedData: function (mainService, $stateParams) {
                    return mainService.getData($stateParams.macronutrients)
                }
            }
        })

/*HERE IS WHERE WE ROUTE MYAPP */

    $urlRouterProvider
        .otherwise('/');
});