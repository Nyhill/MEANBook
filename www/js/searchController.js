angular
  .module('cookbook')
  .controller('searchController', searchController);

  function searchController($scope, $http, controllerFactory, $state, $interval){
var interval;
var click = 0;
  $scope.search = function(query){
click = click + 1;
if(click==2){
  $state.reload();
}
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

$scope.count = function(countmin){
var min = countmin;
var sec = 0;

interval = $interval(function(){
  $scope.countmin = min;
  $scope.countsec = sec--;
    if(min==0 && sec==-1){
     $interval.cancel(interval);
  }
  if(sec==-1){
    min--;
    sec=59;
  }

},1000);
}

} 
