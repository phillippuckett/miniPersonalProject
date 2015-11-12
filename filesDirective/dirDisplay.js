angular.module('myApp')
// 1 directive //

.directive('dirDisplay', function () {
	return {
		restrict: 'E',
		templateUrl: '/filesDirective/dirTmpl.html',
		/*template: "Hrllo",*/
		
/* We have our properkeys, and now we need a controller properkey, 
to create a personal scope for this directive*/

		controller: function($scope) {
			
/* Inside of our scope, we are going to retrieve the data in the following manner */

			var currentDate = new Date().getFullYear();
			$scope.date = currentDate.toString();	
			console.log($scope.date);	
			

/*the template is utilized by the controller inside of this (dirDisplay.js) file*/			
		}
	}
});
