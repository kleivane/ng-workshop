angular.module('Oppgave1')
	.directive('ngGithub', ['$http', function($http){
		return {
			restrict: 'E',
			template: '<span class="github-link"><a href="{{browse}}"><i class="fa fa-github"></i><span class="stargazers"> {{count}}</span> stars</a></span>',
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