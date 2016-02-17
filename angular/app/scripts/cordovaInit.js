/**
 * Created by serj0987 on 13.02.16.
 */

'use strict';

var cordovaInit = function () {

    var onDeviceReady = function () {
        receivedEvent('deviceready');
    };

    var receivedEvent = function () {
        console.log('Start event received, bootstrapping application setup.');
        angular.bootstrap(document.body || document.getElementsByTagName('body')[0], ['jsApp']);
    };

    this.bindEvents = function () {
        document.addEventListener('deviceready', onDeviceReady, false);
    };

    //If cordova is present, wait for it to initialize, otherwise just try to
    //bootstrap the application.
    if (window.cordova !== undefined) {
        console.log('Cordova found, wating for device.');
        this.bindEvents();
    } else {
        console.log('Cordova not found, booting application');
        //receivedEvent('manual')
    }
};
document.addEventListener("DOMContentLoaded", function () {
    new cordovaInit();
});

