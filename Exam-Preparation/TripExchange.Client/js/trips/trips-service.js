(function () {
    'use strict';

    function trips(data) {

        function getpublicTrips() {
            return data.get('api/trips');
        }

        function createTrip(trip) {
            return data.post('api/trips', trip);
        }

        function filterTrips(filters) {
            return data.get('api/trips', filters);
        }

        function getTripDetails(id) {
            return data.get('api/trips/' + id)
        }

        function joinTrip(id, tripDetails) {
            return data.put('api/trips/' + id, tripDetails);
        }

        return {
            getpublicTrips: getpublicTrips,
            createTrip: createTrip,
            filterTrips: filterTrips,
            getTripDetails: getTripDetails,
            joinTrip: joinTrip
        }
    }

    angular.module('myApp.services')
        .factory('trips', ['data', trips]);
}());