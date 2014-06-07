angular.module('routes', ['ngRoute'])
	.config(['$routeProvider',
	  	function($routeProvider) {
	    $routeProvider.
	      when('/template', {
	        templateUrl: 'app/oppgave-template/template.html'
	      }).
	      when('/textarea', {
	        templateUrl: 'app/oppgave-textarea/textarea.html'
	      }).
	      when('/scope', {
	        templateUrl: 'app/oppgave-scope/scope.html'
	      }).
	      when('/form', {
	        templateUrl: 'app/oppgave-form/form.html'
	      }).
	      when('/transclude', {
	        templateUrl: 'app/oppgave-transclude/transclude.html'
	      }).
	      when('/', {
	        templateUrl: 'app/main.html'
	      })
	  }]);