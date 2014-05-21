angular.module('routes', ['ngRoute'])
	.config(['$routeProvider',
	  	function($routeProvider) {
	    $routeProvider.
	      when('/template', {
	        templateUrl: 'oppgave-template/template.html'
	      }).
	      when('/textarea', {
	        templateUrl: 'oppgave-textarea/textarea.html'
	      }).
	      when('/scope', {
	        templateUrl: 'oppgave-scope/scope.html'
	      }).
	      when('/form', {
	        templateUrl: 'oppgave-form/form.html'
	      }).
	      when('/transclude', {
	        templateUrl: 'Oppgave-transclude/transclude.html'
	      }).
	      when('/', {
	        templateUrl: 'main.html'
	      })
	  }]);