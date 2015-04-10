angular
  .module('cookbook')
  .controller('searchController', searchController);

  function searchController($scope, $http, controllerFactory){

  $scope.search = function(query){
  $scope.see = true;
  var query = query;
  $http.get('/search' +query).then(function(jsonIngredients){
    var ingredients  = jsonIngredients.data;
/////////////////////////////////////////////////////////////////////////
//FIRST MATCH
/////////////////////////////////////////////////////////////////////////
         $scope.rimg = (ingredients[0].rimg);
         $scope.rname = (ingredients[0].rname);
         $scope.ingredients =(ingredients[0].ingredients);
/////////////////////////////////////////////////////////////////////////
//SECOND MATCH
/////////////////////////////////////////////////////////////////////////
         $scope.rimg2 = (ingredients[1].rimg);
         $scope.rname2 = (ingredients[1].rname);
         $scope.ingredients2 =(ingredients[1].ingredients);
/////////////////////////////////////////////////////////////////////////
//THIRD MATCH
/////////////////////////////////////////////////////////////////////////
         $scope.rimg3 = (ingredients[2].rimg);
         $scope.rname3 = (ingredients[2].rname);
         $scope.ingredients3 =(ingredients[2].ingredients);
})

$scope.trigger1 = function(rname){
  var id=rname;
controllerFactory.setID(id);
}
$scope.trigger2 = function(rname2){
  var id=rname2;
controllerFactory.setID(id);
}

}

} 
