angular.module('Formoppgave')
	.directive('rating', function(){
		return {
			link: function($scope){
				var maxValue = 2;
				$scope.ratings = [];
				_.each(_.range(maxValue), function(i){
					$scope.ratings[i] = {filled: false};
				});

			},
			templateUrl: '/app/oppgave-form/form-template.html'
		};	
	})