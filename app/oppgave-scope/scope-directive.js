angular.module('Scopeoppgave').directive('bookingDirektiv', function() {
  return {
    replace: true,
    scope: {
      mat: "=",
      gjester: "="
    },
    link: function(scope, element, attrs) {
      scope.rompris = parseInt(attrs.gjestepris);
      scope.frokostpris = parseInt(attrs.matpris);
      scope.hotell = attrs.hotell;
    },
    templateUrl: '/app/oppgave-scope/scopetemplate.html'
  };
});