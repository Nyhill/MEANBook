angular
  .module('cookbook')
  .controller('toolsController', toolsController);

  function toolsController($scope){
$scope.knives = [
	{
      url: 'img/redskap/kniv.png',
      id: "Kniv"
    },
    {
      url: 'img/redskap/kniv-vinklad.png',
      id: "Vinklad kniv"
    },
    {
      url: 'img/redskap/knivar.png',
      id: "Olika knivar"
    }
  ];

  $scope.measures = [
	{
      url: 'img/redskap/matt.png',
      id: "Kniv"
    },
    {
      url: 'img/redskap/desimatt.png',
      id: "Vinklad kniv"
    }
  ];

 

  }