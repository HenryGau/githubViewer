// Code goes here

(function() {
  var app = angular.module("githubViewer");

  var UserCtrl = function(
    $scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var onError = function(reason) {
      $scope.error = "Cannot fetch user";
    };


    $scope.message = "GitHub viewer";
    $scope.username = $routeParams.username;
    github.getUser($scope.username)
      .then(onUserComplete, onError);
    
    $scope.repoSortOrder = "-stargazers_count";
  };

  app.controller("UserCtrl", UserCtrl);
}());