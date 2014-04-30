angular.module('Oppgave3').directive('mittDirektiv', function() {
  return {
    replace: true,
    require: '^ngModel',
    scope: {
      ngModel: '=',
      tekst: '@'
    },
    link: function(scope) {
    },
    templateUrl: '/app/oppgave3/scopetemplate.html'
  };
});