angular
	.module('cookbook')
	.controller('recipeController', recipeController);

	function recipeController($scope, $http, recipeFactory, controllerFactory){
var ingredientinfo=[];
var ingredients=[];
var rname=[];
var rdesc=[];
var prepstagecount=-1;
var prepimages = [];
var stages = [];
var clickscount=-0;
var id = controllerFactory.getID();

//Call the factory and pass the imgid which contains the id of the clicked img to use for the database query. 
//The database response is returned from the factory in the returnedrecipe variable(json) which we can parse to our liking
	recipeFactory.getRecipes(id).then(function(returnedrecipe) {
		rname=(returnedrecipe[0].rname)
		rdesc=(returnedrecipe[0].rdesc)

		//array of ingredients		
		ingredients =(returnedrecipe[0].ingredients);
		//array of stages from the database
		stages =(returnedrecipe[0].stages);
		//array of preparation images from the database
		prepimages = (returnedrecipe[0].prepimg);
				//set the values to the view
				$scope.rname = rname;
				$scope.rdesc=rdesc;
				$scope.recipeimg = (returnedrecipe[0].rimg);
				$scope.ingredientinfo = ingredientinfo;
				$scope.ingredients=ingredients;
				$scope.stages = stages;
		})
	$scope.check = function(){
	$scope.prepimages = prepimages[0];

	}
	$scope.next = function(){
	clickscount = clickscount+1;
	prepstagecount = prepstagecount+1;

	var colorShow=$(".list-group-item").eq(clickscount-1).css('background-color', '#FFFF85');
	colorShow.prev().css('background-color', 'lightgreen');

	if(clickscount>prepimages.length){
		clickscount = clickscount;
	}
	if(prepstagecount>stages.length-1){
		prepstagecount = prepstagecount;
		$scope.next = false;
		$scope.back = false;
	}
	$scope.prepimages = prepimages[clickscount];
	$scope.prepstage = stages[prepstagecount];
	}

	$scope.back = function(){
		$scope.stagemiages.next();
	}

	}
	






