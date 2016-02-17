'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
    .controller('MainCtrl', function ($scope, priorityList, task, $location, $timeout) {
        $scope.priorityList = priorityList;
        $scope.taskList = task.getList();
        $scope.priorityFilter = 'all';

        $scope.go = function (path) {
            $location.path(path);
        };

        $scope.setComplete = function (index, taskObj) {
            task.setComplete(index, taskObj);
        };

        $scope.delete = function (index) {
            task.delete(index);
        };

    });
