'use strict';

let app = angular.module('myApp',['ui.router', 'mm.foundation','typer','angular-timeline','angular-scroll-animate','ngSanitize']);

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

app.controller('MainCtrl', function($scope, $document, $timeout,$location, $anchorScroll, $sce){

  // Navigation Control
  $scope.gotoAnchor = function(anchor,$event) {

      $location.hash(anchor);
      $anchorScroll();
  };




  $scope.events = [{
    badgeClass: 'info',
    title: 'Coding House',
    when:' October 2015 - January 2016',
    content: 'A Silicon Valley Coding BootCamp',
    contentHtml:'Learn more here: <a href="https://codinghouse.co/">Coding House</a>'
  },
  {
    badgeClass: 'info',
    title: 'The Pennsylvania State University',
    when:' September 2011 - August 2015',
    content:'Bachelor of Science (B.S) in Mechanical Engineering',
    contentHtml:'Learn more here: <a href="http://www.psu.edu/">The Pennsylvania State University</a>'
  },
  {
    badgeClass: 'info',
    title: 'Second heading',
    when:'somtime',
    content: 'More awesome content.'
  },
  {
    badgeClass: 'info',
    title: 'Second heading',
    when:'somtime',
    content: 'More awesome content.'
  }
];

$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};

	$scope.leftAlign = function() {
		$scope.side = 'left';
	}

	$scope.rightAlign = function() {
		$scope.side = 'right';
	}

	$scope.defaultAlign = function() {
		$scope.side = ''; // or 'alternate'
	}



});

app.controller('TopBar', function ($scope, $location, $anchorScroll) {


});
