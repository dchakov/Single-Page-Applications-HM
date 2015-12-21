﻿(function () {
    'use strict';

    function HomeController(statistics, trips, drivers) {
        var vm = this;

        statistics.getStats()
            .then(function (stats) {
                vm.stats = stats;
            })

        trips.getpublicTrips()
            .then(function (publicTrips) {
                vm.trips = publicTrips;
            })

        drivers.getpublicDrivers()
            .then(function (publicDrivers) {
                vm.drivers = publicDrivers;
            })
    }

    angular.module('myApp.controllers')
        .controller('HomeController', ['statistics', 'trips', 'drivers', HomeController])
}());