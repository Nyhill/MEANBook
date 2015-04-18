angular
	.module('cookbook')
	.controller('requestController', requestController);

	function requestController($scope, $http, controllerFactory){
	$scope.images = [
	{
      url: 'img/recipe1/gksr.png',
      id: "Gräddig kycklingsås med ris"
    },
    {
      url: 'img/recipe6/mkrl.png',
      id: "Makaronilåda"
    },
    {
      url: 'img/recipe4/fisksoppa.png',
      id: "Fisksoppa"
    },
    {
      url: 'img/morotsoppa.png',
      id: "Morotsoppa"
    },
    {
      url: 'img/recipe2/köttfärs.png',
      id: "Köttfärssoppa"
    },
    {
      url: 'img/recipe3/greksalad.png',
      id: "Grekisk sallad"
    },
    {
      url: 'img/tonfisksallad.png',
      id: "Tonfisk sallad"
    },
    {
      url: 'img/vegepasta.png',
      id: "Vegetarisk Pasta"
    },
    {
      url: 'img/recipe5/paprikor.png',
      id: "Fyllda Paprikor"
    },
  ];

$scope.trigger = function(id){
	var id=id;
controllerFactory.setID(id);


}

}
	