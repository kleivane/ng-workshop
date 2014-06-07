angular.module('Textareaoppgave').directive('myTextarea', function() {
	return {
		replace: true,
		link: function(scope, element, attr) {
			scope.maxlengde = attr.maxlengde;
			scope.counter = attr.maxlengde;
			scope.feil = false;
		},
		templateUrl: 'app/oppgave-textarea/textareatemplate.html'
	};
})
.directive('validateTextarea', function() {
	return {
		require: ['ngModel'],
		link: function(scope, element, attrs, ctrls) {
			var ngModel = ctrls[0];

			var validerOgOppdater = function(viewValue) {
				if (viewValue) {
					scope.counter = scope.maxlengde - viewValue.length;
					var valid = validerAntallTegn();
				} else {
					scope.counter = scope.maxlengde;
				}
			};
			
			scope.$watch(function () {
				return ngModel.$viewValue;
			}, function(newValue) {
				validerOgOppdater(newValue);
				return newValue;
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