(function () {
    'use strict';

    function TripDetailsController($routeParams, trips, identity, $location) {
        var vm = this;
        vm.identity = identity;

        vm.id = $routeParams.id;
        vm.name = $routeParams.name;

        trips.getTripDetails($routeParams.id)
            .then(function (publicTrips) {
                vm.trips = publicTrips;
            })

        vm.joinTrip = function () {
            trips.joinTrip($routeParams.id, vm.trips)
              .then(function (joinedTrip) {

                  $location.path('/trips/details/trips');
              })
        }
    }

    angular.module('myApp.controllers')
        .controller('TripDetailsController', ['$routeParams', 'trips', 'identity', '$location', TripDetailsController])
}());