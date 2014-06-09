describe('Rating-direktivet', function(){
	var elm, scope, createElm;

	beforeEach(module('ng-workshop'))
	beforeEach(module('Formoppgave'));
	beforeEach(inject(function($rootScope, $compile){

		createElm = function(element){
			elm = angular.element(element);
		    scope = $rootScope;
		    $compile(elm)(scope);
		    scope.$digest();
		};
	
	}));

	it('skal tegne opp likt antall inputfelter som det er maks av', function(){
		createElm('<span rating></span>');
		expect($(elm).find('input').length).toBe(5);
	});

	it('skal ha 5 ufylte stjerneikoner', function(){
		createElm('<span rating></span>');
		expect($(elm).find('.fa-star-o').length).toBe(5);
	});

	it('skal ha 1 fylt stjerneikon etter å ha klikket på #1', function(){
		createElm('<span rating></span>');
		$(elm).find('input[value=1]').click()
		expect($(elm).find('input[value=1] + i')).toHaveClass('fa-star')
	});

});