function CounterController ($scope) {
  //console.log("This is your Counter Controller.");
  $scope.data = 0;
  $scope.name = 'likes';
  var minus = true;

  $scope.likeCount = function() {
    if (minus) {
      $scope.data++;
    } else {
      $scope.data--;
    }
    if ($scope.data === 1) {
      $scope.name = 'like';
    } else {
      $scope.name = 'likes';
    }
  };

  $scope.likeDownCount = function () {
    if (minus) {
      minus = false;
    } else {
      minus = true;
    }
  }



}

export default CounterController;
