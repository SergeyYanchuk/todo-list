'use strict';

/**
 * @ngdoc service
 * @name jsApp.task
 * @description
 * # task
 * Service in the jsApp.
 */
angular.module('jsApp')
    .service('task', function (store, $interval) {

        var self = this;
        this.getList = function () {
            this.tasks = store.get('tasks') || [];
            return this.tasks;
        };

        this.get = function (index) {
            if (index && typeof[index] !== 'undefined') {
                return this.tasks[index];
            }
        };

        this.add = function (task) {
            this.tasks.push(task);
            store.set('tasks', this.tasks);
        };

        this.update = function (index, task) {
            if (index) {
                this.tasks[index] = this.get(index);
                store.set('tasks', this.tasks);
            }
        };

        this.setComplete = function (index, task) {
            if (!task.complete) {
                task.complete = new Date();
                this.update(index, task);
            }
        };

        this.delete = function (index) {
            delete this.tasks[index];
            this.tasks.splice(index, 1);
            store.set('tasks', this.tasks)
        };

        this.tasks = this.getList();

        $interval(function () {
            var now = new Date();
            self.tasks.forEach(function (val, key) {
                var deadline = new Date(val.deadline);
                var completed = new Date(val.completed);
                if (val.deadline) {
                    if (
                        (now.getTime() > deadline.getTime()
                        || completed.getTime() > deadline.getTime())
                        && val.expired != true) {
                        val.expired = true;
                    }
                }
            });
        })

    });
