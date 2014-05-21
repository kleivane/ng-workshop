angular.module('Scopeoppgave').directive('mittDirektiv', function() {
  return {
    replace: true,
    require: '^ngModel',
    scope: {
      ngModel: '=',
      tekst: '@'
    },
    link: function(scope) {
    },
    templateUrl: '/app/oppgave-scope/scopetemplate.html'
  };
});