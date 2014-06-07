describe('Rating-direktivet', function(){
	var $controller, elm, scope;

	beforeEach(module('ng-workshop'))
	beforeEach(module('Formoppgave'));
	beforeEach(inject(function(_$controller_, $rootScope, $compile){
		$controller = _$controller_;

		elm = angular.element(
	      '<span rating></span>');

	    scope = $rootScope;
	    $compile(elm)(scope);
	    scope.$digest();
		}))

	it('skal tegne opp likt antall inputfelter som det er maks av', function(){
		expect(elm).toBeDefined();
	});
});