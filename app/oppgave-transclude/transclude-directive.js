angular.module('Oppgavetransclude').directive('myTextarea', function() {

		return {
        transclude: true,
        template: '<div class="something" ng-transclude> This is my directive content</div>'
    }
	});