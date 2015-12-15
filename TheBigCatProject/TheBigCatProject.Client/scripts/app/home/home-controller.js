(function () {
    'use strict';

    function HomeController() {
        var vm = this;

        vm.hi = 'HI';
    }

    angular.module('catApp.controllers')
        .controller('HomeController', [HomeController]);
}());