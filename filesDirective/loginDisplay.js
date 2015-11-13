angular.module('myApp').directive("loginDisplay", [function () {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/filesDirective/loginTmpl.html',
        controller: ['$scope', '$http', '$window', function($scope, $http, $window) {
            $scope.loginError = false;
            $scope.login = function () {
              $scope.loginError = false;
              $http.post('/auth/login', {
                  username: $scope.username, 
                  password: $scope.password
              })
                .success(function (response) {
                  $window.location='/';
                })
                .error(function (err, status) {
                  $scope.username = '';
                  $scope.password = '';
                  $scope.loginError = true;
                })
            }
          }
        ]
      }
    }])
    
/*NEEDING TO MAKE A SHOW/HIDE FOR THE LOGIN, BUT DOING IT THROUGH A LINK WITH NG-CLICK */
    