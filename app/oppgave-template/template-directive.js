angular.module('Templateoppgave')
	.directive('ngGithub', ['$http', function($http){
		return {};
	}]);

//TEMPLATE:
// '<span class="github-link"><a href="{{browse}}"><i class="fa fa-github"></i><span class="stargazers"> {{count}}</span> stars</a></span>'