// Code goes here

(function() {
  var app = angular.module("githubViewer");

  var MainCtrl = function(
    $scope, $interval, $location, github) {

    $scope.search = function(username) {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      // Go to other view after search
      $location.path("/user/" + username);
    };

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown,
        1000, $scope.countdown);

    };


    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();
  };

  app.controller("MainCtrl", MainCtrl);
}());