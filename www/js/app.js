angular
	.module('cookbook', [
	'ui.router',
	'ngAnimate',
	'ui.utils',
	'ngSanitize'
	])
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('index', {
			url:'/home',
			templateUrl:'index.html'
			

		})
		.state('recipes', {
			url:'/recipes',
			templateUrl:'templates/recipe-partial.html',
			controller:'requestController'
		})
		.state('recipename', {
			url:'/recipes/view',
			templateUrl:'templates/recipe-view.html',
			controller:'recipeController'
		})
		.state('search', {
		url:'/search',
		templateUrl:'templates/search-view.html',
		controller:'searchController'
		})
	}])