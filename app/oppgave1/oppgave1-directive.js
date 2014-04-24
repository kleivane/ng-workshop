angular.module('Oppgave1')
	.directive('ngGithub', ['$http', function($http){
		return {
			restrict: 'E',
			template: '<a href="{{browse}}">Stargazers: <span class="stargazers">{{count}}</span></a>',
			replace: true,
			link: function(scope, element, attrs){
				var user = attrs.user;
				var repo = attrs.repo;
				scope.browse = 'https://github.com/'+user+'/'+repo;
				$http.jsonp('https://api.github.com/repos/'+user+'/'+repo+'?callback=JSON_CALLBACK')
					.success(function(data){
						scope.count = data.data.stargazers_count;
					});
			}
		}
	}]);