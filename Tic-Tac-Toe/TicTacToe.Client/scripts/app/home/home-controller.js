(function () {
    'use strict';

    function HomeController() {
        var vm = this;

        vm.hi = 'HI';
    }

    angular.module('tictactoeApp.controllers')
        .controller('HomeController', [HomeController]);
}());