angular.module('Formoppgave')
	.directive('rating', function(){
		return {
			link: function($scope){
				var maxRating = 5; 
				$scope.max = maxRating;
				$scope.starRatings = [];
				_.each(_.range(0, maxRating) , function(i){
					$scope.starRatings.push({
						value: i+1,
						filled: false
					});
				});

				$scope.rate = function(star){
					_.each(_.range(0, star.value) , function(i){
						$scope.starRatings[i].filled = true;
					});
					_.each(_.range(star.value, maxRating), function(i){
						$scope.starRatings[i].filled = false;
					})
				};
			},
			templateUrl: '/app/oppgave-form/form-template.html'
		};	
	})