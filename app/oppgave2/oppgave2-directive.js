angular.module('Oppgave2').directive('myTextarea', function($timeout) {
	return {
		replace: true,
		restrict: 'A',
		link: 
		function(scope, element, attr) {
			scope.maxlengde = attr.maxlengde;
			scope.counter = attr.maxlengde;
			scope.feil = false;
		},
		templateUrl: '/app/oppgave2/textareatemplate.html'
	};
})
.directive('validateTextarea', function($timeout) {
	return {
		require: ['ngModel', '^form'],
		link: function(scope, element, attrs, ctrls) {
			var ngModel = ctrls[0];
			var form = ctrls[1];

			var validerOgOppdater = function(viewValue) {
				if (viewValue) {
					scope.counter = scope.maxlengde - viewValue.length;
					var valid = validerAntallTegn();
				} else {
					scope.counter = scope.maxlengde;
				}
			};
			
			ngModel.$parsers.unshift(function(viewValue) {
				validerOgOppdater(viewValue);
				return viewValue;
			});

			function validerAntallTegn() {
				if (scope.counter < 0 || scope.counter === scope.maxlengde) {
					scope.feil = true;
					settFeilmeldingsTekst();
					$('.melding').css('color', 'red');
					return false;
				} else {
					scope.feil = false;
					angular.element('.melding').css('color', 'black');
					return true;
				}
			}

			function settFeilmeldingsTekst() {
				angular.element('.melding').text(getFeilmeldingTekst());
			}

			function getFeilmeldingTekst() {
				if(scope.counter === scope.maxlengde) {
					return "Du må fylle ut feltet";
				} 
				if(scope.counter < 0) {
					return "Du har skrevet for mange tegn";
				}
			}

			scope.mistetFokus = function() {
				validerAntallTegn();
			};
		}
	};
});