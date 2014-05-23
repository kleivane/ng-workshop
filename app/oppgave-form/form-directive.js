angular.module('Formoppgave')
	.directive('rating', function(){
		return {
			link: function($scope){
				var maxRating = 5; 
				$scope.max = maxRating;
				$scope.starRatings = [];
				_.each(_.range(1, 6) , function(i){
					$scope.starRatings.push({
						value: i,
						filled: false
					});
				});
			},
			templateUrl: '/app/oppgave-form/form-template.html'
		};	
	})