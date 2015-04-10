/* Controllers of apiServicesControllers component */
//______________________________________________

var MenuResourceControllers = angular.module('resources.menu-resource.controllers', ['MenuResourceModules']);


/* Menu Resource Controller */
MenuResourceControllers.controller('ResourcesMenuResourceCtrl', 
		   ['$scope', 'MenuResource', 'MenuResourceChannel',
    function($scope,   MenuResource,   MenuResourceChannel) {
			   
			   $scope.toggleRequest = function(request) {
				     if ($scope.isRequestShown(request)) {
				       $scope.shownRequest = null;
				     } else {
				       $scope.shownRequest = request;
				     }
				   };
				   $scope.isRequestShown = function(request) {
				     return $scope.shownRequest === request;
				   };
			   			   
				   var requestEnd = requestStart =  menu = undefined;
				   //for attache menu tests to detect browser or phone
				   $scope.isWebview = ionic.Platform.isWebView();
				   
				   
			   //
			   //Menu Resource 
			   //
				   
			   //Retrieve
			  
			   $scope.menuRetrieveRequests = [];
			   
			   //path params for retrieve request
			   $scope.menuRetrieve = {};
			   $scope.menuRetrieve.menu_name = "main-menu";
			   
			   $scope.callMenuRecourceRetrieve = function(menu_name) {
				   menu = undefined;
				   requestStart = Date.now();
				   MenuResource.retrieve(menu_name).then(
				    		//success
				    		function(data) {
				    			console.log('menu retrieve request success'); 
				    		},
				    		//error
				    		function(data) {
				    			console.log('menu retrieve request error'); 
				    		}
				    );
			   };
			   //
			   MenuResourceChannel.onMenuRetrieveConfirmed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.menuRetrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data, menu:menu});
			   });
			 
			   MenuResourceChannel.onMenuRetrieveFailed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.menuRetrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			    

			    
}]);


