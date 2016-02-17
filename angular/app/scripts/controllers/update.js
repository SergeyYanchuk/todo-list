'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
    .controller('UpdateCtrl', function ($scope, priorityList, task, $location, $routeParams) {
        $scope.priorityList = priorityList;
        $scope.minDate = new Date();
        $scope.minDate.setMilliseconds(0);
        $scope.minDate.setSeconds(0);

        $scope.task = {
            priority: "low",
            deadline: $scope.minDate
        };

        if ($routeParams.index) {
            $scope.task = task.get($routeParams.index);
        }

        $scope.save = function () {
            if ($routeParams.index) {
                task.update($routeParams.index, $scope.task);
            } else {
                task.add($scope.task);
            }
            $location.path('/');
        }
    });
