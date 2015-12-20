(function () {
    'use strict';

    function SearchCatsController($scope, cats) {
        var vm = this;
        vm.currentPage = 1;

        cats.searchCats()
            .then(function (initialCats) {
                vm.cats = initialCats;
                console.log(vm.cats);
            });

        $scope.$watch('request.name', function (newVal, oldVal) {
            cats.searchCats($scope.request)
                .then(function (filteredCats) {
                    vm.cats = filteredCats;
                });
            console.log($scope.request);
        });

        vm.search = function (request, page) {
            request = request || {};
            request.page = page;

            vm.currentPage = page;

            cats.searchCats(request)
                .then(function (filteredCats) {
                    vm.cats = filteredCats;
                    console.log(vm.cats);
                });
        }
    }

    angular.module('catApp.controllers')
        .controller('SearchCatsController', ['$scope', 'cats', SearchCatsController]);
}());