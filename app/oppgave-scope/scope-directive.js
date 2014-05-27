angular.module('Scopeoppgave').directive('bookingDirektiv', function() {
  return {
    replace: true,
    scope: {
      frokost: '=',
      gjester: '=',
      hotell: '@'
    },
    link: function(scope) {
      scope.rompris = 100;
      scope.frokostpris = 25;
    },
    templateUrl: '/app/oppgave-scope/scopetemplate.html'
  };
});