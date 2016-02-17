'use strict';

/**
 * @ngdoc overview
 * @name jsApp
 * @description
 * # jsApp
 *
 * Main module of the application.
 */
angular
    .module('jsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angular-storage',
        'ui.bootstrap'

    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/update', {
                templateUrl: 'views/update.html',
                controller: 'UpdateCtrl',
                controllerAs: 'update'
            })
            .when('/update/:index', {
                templateUrl: 'views/update.html',
                controller: 'UpdateCtrl',
                controllerAs: 'update'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
