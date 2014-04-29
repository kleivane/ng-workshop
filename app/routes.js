angular.module('routes', ['ngRoute'])
	.config(['$routeProvider',
	  	function($routeProvider) {
	    $routeProvider.
	      when('/oppgave1', {
	        templateUrl: 'oppgave1/oppgave1.html'
	      }).
	      when('/oppgave2', {
	        templateUrl: 'oppgave2/oppgave2.html'
	      }).
	      when('/oppgave3', {
	        templateUrl: 'oppgave3/oppgave3.html'
	      }).
	      when('/', {
	        templateUrl: 'main.html'
	      })
	  }]);