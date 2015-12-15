(function () {
    'use strict';

    function catsService($http, $q, baseUrl) {

        function addCat(cat) {
            var defered = $q.defer();

            $http.post(baseUrl + 'api/cats', cat)
                .then(function (response) {
                    defered.resolve(response);
                }, function (err) {
                    defered.reject(err);
                });

            return defered.promise;
        }

        return {
            addCat: addCat
        }
    }

    angular.module('catApp.services')
        .factory('cats', ['$http', '$q', 'baseUrl', catsService])
}());