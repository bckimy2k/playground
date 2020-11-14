angular.module('myApp', [])
.run(function($rootScope) {
  $rootScope.someProperty = 'Hello computer';
  $rootScope.someAction = function() {
     $rootScope.someProperty = 'hello human';
  };
});