angular.module('Oppgavetransclude').directive('menyDirektiv', function() {

		return {
        scope: {
        	aktivtElement: '@'
        },
      	transclude: true,
      	restrict: 'A',
      	replace: true,
      	template:
        '<div>' +
        	'<div class="meny">' +
        	'<p>Oppgaver</p>' +
			'<ul>' +
				'<li><a href="#template">Template</a></li>' +
				'<li><a href="#textarea">Textarea</a></li>'+
				'<li><a href="#scope">Scope</a></li>' +
				'<li><a href="#form">Form</a></li>'+
				'<li><a href="#transclude">Transclude</a></li>' +
			'</ul>' +
        	'</div>' +

          '<div ng-transclude></div>' +
        '</div>',

		link: function(scope, element, attr) {
			$(element.find("li")[scope.aktivtElement-1]).addClass("aktivt-element");
        }
      } 
	});