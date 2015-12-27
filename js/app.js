'use strict';

let app = angular.module('myApp',['ui.router', 'mm.foundation','typer']);

// Scroll Animations
app.value('duScrollDuration', 2000).value('duScrollOffset', 30)

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

  // Navigation Control
  $scope.gotoAnchor = function(anchor,$event) {
    console.log($event);
      $location.hash(anchor);
      $anchorScroll();
  };


});

app.controller('TopBar', function ($scope, $location, $anchorScroll) {


});
