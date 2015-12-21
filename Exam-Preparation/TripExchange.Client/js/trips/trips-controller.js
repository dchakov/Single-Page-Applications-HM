(function () {
    'use strict';

    function TripsController(trips, cities, identity) {
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
            vm.filterTrips();
        }

        vm.nextPage = function () {
            vm.request.page++;
            vm.filterTrips();
        }

        vm.filterTrips = function () {
            trips.filterTrips(vm.request)
                .then(function (filteredTrips) {
                    vm.trips = filteredTrips;
                })
        }

        cities.getAll()
           .then(function (response) {
               vm.cities = response;
           })

        trips.getpublicTrips()
            .then(function (publicTrips) {
                vm.trips = publicTrips;
            })
    }

    angular.module('myApp.controllers')
        .controller('TripsController', ['trips', 'cities', 'identity', TripsController])
}());