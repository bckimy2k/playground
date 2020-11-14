angular.module('myApp', [])
.controller('messageController', function($scope) {
     $scope.getMessage = function() {
         setTimeout(function() {
              // wrapped this within $apply
              $scope.$applyAsync(function() {
                $scope.message = 'fetched after 3 seconds';
              });
              console.log('message :' + $scope.message);
         }, 3000);
     };
     $scope.getMessage();
  });