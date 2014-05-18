angular.module('Oppgavetransclude').directive('ikeaStol', function() {

		return {
        scope: {
        	pris: '@',
        	farge: '@'
        },
      	transclude: true,
      	restrict: 'E',
      	replace: true,
      	template:
        '<div>' +
        '<p>Produktbeskrivelse:</p>' +
          '<div ng-transclude style="background-color: lightgreen;"></div>' +
          	'<p>Pris: {{pris}} </p>' +
          	'<p>Farge: {{farge}} </p>' +
        '</div>',
      link: function (scope, element, attrs)
      {
      	
      }} 
	});