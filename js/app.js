/**
 * Created by Somy on 27/08/15.
 */

var fruitsApp = angular.module('fruitsApp', [
    'ngRoute',
    'dogControllers'
]);

fruitsApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListController'

        }).
        when('/details/:itemId', {
            templateUrl: 'partials/details.html',
            controller: 'DetailsController'

        }).
        otherwise({
            redirectTo: '/list'
        });
}]);