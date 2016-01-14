'use strict';

var app = angular.module('myApp',['ui.router','duScroll', 'mm.foundation','typer','angular-timeline','ngSanitize','angular-scroll-animate']);

// Scroll Animations
app.value('duScrollDuration', 2000).value('duScrollOffset', 30)

app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode({
		enabled:true,
		requireBase: false
	});

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
    title: 'Delphi Automotive PLC',
    when:' May - August 2014',
    content:'A summer internship with the company in Lockport NY.',
    contentHtml: `<p>Please see my resume for more details.</p>`
  },
  {
    badgeClass: 'info',
    title: 'IES Study Abroad',
    when:' May - July 2013',
    content: 'Spent the summer learning the Japanese language and culture.',
    contentHtml:'The program is found at: <a href="http://www.iesabroad.org/study-abroad/programs/tokyo-summer">IES Tokyo Summer</a>'
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
    
    $scope.animateCardInLeft = function($el) {
		$el.removeClass('card-hidden');
		$el.addClass('animated slideInLeft');
	};
    $scope.animateCardInRight = function($el) {
		$el.removeClass('card-hidden');
		$el.addClass('animated slideInRight');
	};
    
    $scope.animateCardOutLeft = function($el) {
		$el.addClass('card-hidden');
		$el.removeClass('animated slideInLeft');
    };
     $scope.animateCardOutRight = function($el) {
		$el.addClass('card-hidden');
		$el.removeClass('animated slideInRight');
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
