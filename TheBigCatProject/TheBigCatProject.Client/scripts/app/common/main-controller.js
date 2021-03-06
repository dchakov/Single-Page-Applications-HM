﻿(function () {
    'use strict';

    function MainController($location, auth, identity) {
        var vm = this;

        // this is for initial load of the page
        waitForLogin();

        vm.logout = function () {
            vm.globballySetCurrenUser = undefined;
            auth.logout();
            waitForLogin(); // this is for second login
            $location.path('/');
        }

        function waitForLogin() {
            identity.getUser()
            .then(function (user) {
                vm.globballySetCurrenUser = user;
            });
        }
    }

    angular.module('catApp')
    .controller('MainController', ['$location', 'auth', 'identity', MainController]);
}());