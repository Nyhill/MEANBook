angular
	.module('cookbook')
	.controller('requestController', requestController);

	function requestController($scope, $http, controllerFactory){
	$scope.images = [
	{
      url: 'img/creamychicken.png',
      id: "Gräddig kycklingsås med ris"
    },
    {
      url: 'img/risotto.png',
      id: "Risotto"
    },
    {
      url: 'img/lins.png',
      id: "Linssoppa"
    }
  ];

$scope.trigger = function(id){
	var id=id;
controllerFactory.setID(id);


}

}
	