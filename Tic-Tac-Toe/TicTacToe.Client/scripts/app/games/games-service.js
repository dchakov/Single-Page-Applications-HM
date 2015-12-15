(function () {
    'use strict';

    function gameService($http, $q, baseUrl) {

        function createGame() {
            var deferred = $q.defer();

            $http.post(baseUrl + 'games/create')
                .then(function (response) {
                    deferred.resolve(response);
                }, function (err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function joinGame() {
            var deferred = $q.defer();

            $http.post(baseUrl + 'games/join')
                .then(function (response) {
                    deferred.resolve(response);
                }, function (err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function gameStatus(id) {
            var deferred = $q.defer();

            $http.get(baseUrl + 'games/status/' + id)
                .then(function (response) {
                    deferred.resolve(response);
                }, function (err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function playGame(data) {
            var deferred = $q.defer();

            $http.post(baseUrl + 'games/play')
                .then(function (response) {
                    deferred.resolve(response);
                }, function (err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        return {
            create: createGame,
            join: joinGame,
            status: gameStatus,
            play: playGame
        }
    }

    angular.module('tictactoeApp.services')
        .factory('game', ['$http', '$q', 'baseUrl', gameService]);
}());