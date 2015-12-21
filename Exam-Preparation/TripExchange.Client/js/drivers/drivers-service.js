(function () {
    'use strict';

    function drivers(data) {

        function getpublicDrivers() {
            return data.get('api/drivers');
        }

        function filterDrivers(filters) {
            return data.get('api/drivers', filters);
        }

        function getDriverDetail(id) {
            return data.get('api/drivers/' + id);
        }

        return {
            getpublicDrivers: getpublicDrivers,
            filterDrivers: filterDrivers,
            getDriverDetail: getDriverDetail
        }
    }

    angular.module('myApp.services')
        .factory('drivers', ['data', drivers]);
}());