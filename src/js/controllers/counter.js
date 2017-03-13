function CounterController ($scope) {
  //console.log("This is your Counter Controller.");
  $scope.data = 0;
  $scope.name = 'likes';

  $scope.likeCount = function() {
    $scope.data++;
    if ($scope.data === 1) {
      $scope.name = 'like';
    } else {
      $scope.name = 'likes';
    }
  };

}

export default CounterController;
