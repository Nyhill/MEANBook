angular
	.module('cookbook')
	.factory('controllerFactory', controllerFactory);

	function controllerFactory(){
		var setID;
		var src;
		
		return{
			setID: function(id){
				setID = id;
				
			},
			getID : function(){
				return setID;
				
			}
		}
	}