(function () {
    'use strict';

    function DriverDetailsController($routeParams, drivers, identity) {
        var vm = this;
        vm.identity = identity;

        vm.id = $routeParams.id;

        drivers.getDriverDetail($routeParams.id)
            .then(function (response) {
                vm.driver = response;
            })

    }

    angular.module('myApp.controllers')
        .controller('DriverDetailsController', ['$routeParams', 'drivers', 'identity', DriverDetailsController])
}());