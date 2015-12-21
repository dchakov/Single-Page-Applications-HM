(function () {
    'use strict';

    function CreateTripController($location, cities, trips) {
        var vm = this;

        vm.createTrip = function (newTrip) {
            trips.createTrip(newTrip)
                .then(function (createdTrip) {
                    $location.path('/trips/details/' + createdTrip.id);
                });
        }

        cities.getAll()
           .then(function (response) {
               vm.cities = response;
           })
    }

    angular.module('myApp.controllers')
        .controller('CreateTripController', ['$location', 'cities', 'trips', CreateTripController])
}());