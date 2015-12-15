(function () {
    'use strict';

    function CreateGameController(game, $location) {
        var vm = this;

        vm.createGame = function () {
            game.create()
                .then(function (data) {
                    console.log('Game Created');
                    $location.path('/play-game/' + data);
                }, function (err) {
                    console.log(err);
                });
        }

        vm.createGame();
    }


    angular.module('tictactoeApp.controllers')
        .controller('CreateGameController', ['game', '$location', CreateGameController]);
}());