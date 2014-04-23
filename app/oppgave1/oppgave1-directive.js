angular.module('Oppgave1')
	.directive('ngGithub', function(){
		return {
			restrict: 'E',
			template: '<a href=""><span>Stargazers: </span>',
			replace: true,
			controller: 'oppgave1-controller'
		}
	});