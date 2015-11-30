'use strict';

var app = angular.module('myApp',['ui.router', 'mm.foundation']);


app.config(function ($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/"); 

   $stateProvider
   .state('landing',{
    url:'/',
    templateUrl:'partials/landing.html'
   })
   .state('about',{
    url:'/about',
    templateUrl:'partials/about.html'
   })
   .state('recentwork',{
    url:'/recentwork',
    templateUrl:'partials/recentwork.html'
   })
   .state('contact',{
    url:'/contact',
    templateUrl:'partials/contact.html'
   });


});

app.controller('MainCtrl', function(){

})

app.controller('TopBar', function ($scope) {

});