var app = angular.module('myApp', [])
app.controller('buyCtrl', function ($scope) {
  $scope.boughtList = [];
  $scope.message = '';
  $scope.buyItems = [
    { id: '1', name: 'biscuits', quantity: "5 Packets"},
    { id: '2', name: '0il', quantity: "2 Packets" },
    { id: '3', name: 'Meat', quantity: "2 Kgs" },
    { id: '4', name: 'Eggs', quantity: "1 Dozan" },
    { id: '5', name: 'Rice', quantity: '1 Bag' },
    { id: '6', name: 'Fruites', quantity: '3 Apples, 3 Oranges' },
    { id: '7', name: 'Chocolates', quantity: 2 },
    { id: '8', name: 'milk', quantity: '2 Liters' },
    { id: '9', name: 'Snaks', quantity: " Any 5 Items" },
    { id: '10', name: 'Vegitables', quantity: ' Any 5 Items' },
  ]
  var message1='';

  // if($scope.boughtList.length = 0)$scope.message = 'You did not bought anything yet'  
  $scope.decItem1 = function() {

    $scope.count1 = $scope.count1 - 1;
}
$scope.incItem1 = function() {
    $scope.count1 = $scope.count1 + 1;
}
  $scope.buy = function (item) {
    if (item) {
      $scope.boughtList.push({ id: item.id, name: item.name, quantity: item.quantity})
      $scope.buyItems.splice($scope.buyItems.indexOf(item), 1)
    };

    // $scope.boughtSize = $scope.boughtList.length;
    // console.log($scope.boughtSize)
    // if($scope.boughtSize == 0)$scope.message='You did not bought any thing yet';
    // console.log($scope.message);

   
    // $scope.buySize = $scope.buyItems.length;
    // if($scope.buySize == 0)$scope.message1 = 'you bougth everything'
    // console.log(message1)

  };
  $scope.remove = function (item) {
    if (item) {
      $scope.buyItems.push({ id: item.id, name: item.name, quantity: item.quantity});
     
    }
  }
})
