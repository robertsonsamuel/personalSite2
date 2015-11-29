'use strict';

var app = angular.module('portfolio',['ui.router']);


app.config(function stateController($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/"); 

   $stateProvider
   .state({
    url:'/',
    templateUrl:'partials/landing.html'
   })
   .state({
    url:'/about',
    templateUrl:'partials/about.html'
   })
   .state({
    url:'/recentwork',
    templateUrl:'partials/recentwork.html'
   })
   .state({
    url:'/contact',
    templateUrl:'partials/contact.html'
   });


});

app.controller('MainCtrl', function(){

})