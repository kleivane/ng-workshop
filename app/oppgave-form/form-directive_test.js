describe('Rating-direktivet', function(){
	var elm, scope, createElm;

	beforeEach(inject(function($rootScope, $compile){

		createElm = function(element){
			elm = angular.element(element);
		    scope = $rootScope;
		    $compile(elm)(scope);
		    scope.$digest();
		};
	
	}));

	it('skal tegne opp likt antall inputfelter som det er maks av', function(){

	});

	it('skal ha 5 ufylte stjerneikoner', function(){
		
	});

	it('skal ha 1 fylt og restene ufylte stjerneikoner etter å ha klikket på #1', function(){
		
	});

	it('skal ha 5 fylt og ingen ufylte stjerneikoner etter å ha klikket på #5', function(){
	
	});

	it('skal ha 3 fylt og 2 ufylte stjerneikoner etter å ha klikket på #3', function(){
	
	});



});