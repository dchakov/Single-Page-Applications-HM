(function () {
    'use strict';

    function driverTripsFilter() {
        return function (items, onlyMine, onlyDriver, driverName) {
            var count = items.length;
            var filtered = [];

            if (!onlyMine && !onlyDriver) {
                return items;
            }
            else if (onlyMine && !onlyDriver) {
                for (var i = 0; i < count; i++) {
                    var item = items[i];
                    if (item.isMine == onlyMine) {
                        filtered.push(item);
                    }
                }
            }
            else if (!onlyMine && onlyDriver) {
                for (var i = 0; i < count; i++) {
                    var item = items[i];
                    if (item.driverName == driverName) {
                        filtered.push(item);
                    }
                }
            }

            return filtered;
        }
    }

    angular.module('myApp.filters')
        .filter('driverTripsFilter', [driverTripsFilter])
}());