angular.module('Oppgave4')
	.directive('rating', function(){
		return {
			link: function($scope){
				var maxValue = 2;
				$scope.ratings = [];
				_.each(_.range(maxValue), function(i){
					$scope.ratings[i] = {filled: false};
				});

			},
			templateUrl: '/app/oppgave4/oppgave4-directive.html'
		};	
	})