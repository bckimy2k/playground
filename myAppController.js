angular.module('myApp', [])
.directive('myDirective', function() {
    return {
      restrict: 'EA',
      replace : true,
      template: '<a href="http://google.com"> Click me to go to Google </a>'
    };
  });