(function(){
    'use strict';

    var ang = angular.module('footwear', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'app/home/home.tpl.html',
            controller: 'HomeController as home'
        });
        //  $locationProvider.html5Mode(true);
    });

   
})();