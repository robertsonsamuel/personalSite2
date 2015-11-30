'use strict';

var app = angular.module('myApp',['ui.router', 'mm.foundation','typer']);


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

app.controller('MainCtrl', function($scope,$location, $anchorScroll){

});

app.controller('TopBar', function ($scope, $location, $anchorScroll) {
  $scope.gotoAnchor = function(anchor) {
   console.log(anchor);
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('aboutLanding');
    
};

});