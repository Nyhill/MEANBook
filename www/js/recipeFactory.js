angular
	.module('cookbook')
	.factory('recipeFactory', recipeFactory);

	function recipeFactory($http){
return{
	//var deferred = $q.defer();
	getRecipes : function(id){
	var promise= $http.get('/recipes' +id, {rname: id})
 	.then(function (response) {
 	var jsonResult = response.data;
 	console.log(jsonResult);
	return jsonResult;
	})
	return promise;
	}
}
}
