(function () {
    'use strict';

    function beautifulDate() {
        return function (input) {
            // check if input is date

            var monthNames = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ];

            var date = new Date(input);
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            function formatTime(date) {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            }

            var time = formatTime(date);

            return monthNames[monthIndex] + ' ' + day + ', ' + year + ' ' + time;
        }
    }

    angular.module('myApp.filters')
        .filter('beautifulDate', [beautifulDate])
}());