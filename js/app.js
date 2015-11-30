'use strict';

var app = angular.module('myApp',['ui.router', 'mm.foundation','typer','ngVidBg']);


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

app.controller('MainCtrl', function($scope){
  $scope.resources = [
            '../videos/bg-video.mp4',
            '*.ogv',
            '*.swf',
            '*.webm'
            ],
        
        $scope.poster = 'http://placehold.it/2000&text=you%20may%20want%20to%20have%20a%20poster';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.zIndex = '0';
        $scope.playInfo = {};
        $scope.pausePlay = true;
    
});

app.controller('TopBar', function ($scope) {

});