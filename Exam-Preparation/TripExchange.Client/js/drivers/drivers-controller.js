(function () {
    'use strict';

    function DriversController(drivers, identity) {
        var vm = this;
        vm.identity = identity;
        vm.request = {
            page: 1
        };

        vm.prevPage = function () {
            if (vm.request.page == 1) {
                return;
            }
            vm.request.page--;
            vm.filterDrivers();
        }

        vm.nextPage = function () {
            vm.request.page++;
            vm.filterDrivers();
        }
                
        vm.filterDrivers = function () {
            console.log(vm.request);
            drivers.filterDrivers(vm.request)
                .then(function (filteredDrivers) {
                    vm.drivers = filteredDrivers;
                })
        }

        drivers.getpublicDrivers()
            .then(function (publicDrivers) {
                vm.drivers = publicDrivers;
            })
    }

    angular.module('myApp.controllers')
        .controller('DriversController', ['drivers', 'identity', DriversController])
}());