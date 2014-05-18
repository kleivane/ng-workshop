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
	      when('/oppgave4', {
	        templateUrl: 'oppgave4/oppgave4.html'
	      }).
	      when('/transclude', {
	        templateUrl: 'Oppgave-transclude/transclude.html'
	      }).
	      when('/', {
	        templateUrl: 'main.html'
	      })
	  }]);