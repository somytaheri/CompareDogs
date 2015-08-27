/**
 * Created by Somy on 27/08/15.
 */

var dogControllers = angular.module('dogControllers', []);

dogControllers.controller('ListController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get('js/data.json').success(function (data) {
        $scope.dogs = data;
        $scope.orderProp = 'breed';
    })
}]);

dogControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('js/data.json').success(function (data) {
        $scope.dogs = data;
        $scope.whichItem = $routeParams.itemId;


        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevItem = $scope.dogs.length - 1;
        }

        if($routeParams.itemId < $scope.dogs.length -1){
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItem = 0;
        }
    });
}]);