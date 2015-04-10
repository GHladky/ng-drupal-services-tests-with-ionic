/* Controllers of apiServicesControllers component */
//______________________________________________

var SearchNodeResourceControllers = angular.module('resources.search-node-resource.controllers', ['SearchNodeResourceModules']);


/* SearchNode Resource Controller */
SearchNodeResourceControllers.controller('ResourcesSearchNodeResourceCtrl', 
		   ['$scope', 'SearchNodeResource', 'SearchNodeResourceChannel',
    function($scope,   SearchNodeResource,   SearchNodeResourceChannel) {
			   
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
			   			   
				   var requestEnd = requestStart =  search_node = undefined;
				   //for attache search-node tests to detect browser or phone
				   $scope.isWebview = ionic.Platform.isWebView();
				   
				   
			   //
			   //SearchNode Resource 
			   //
				   
			   //Retrieve
			  
			   $scope.searchNodeRetrieveRequests = [];
			   
			   //path params for retrieve request
			   $scope.searchNodeRetrieve = {};
			   $scope.searchNodeRetrieve.keys = "";
			   $scope.searchNodeRetrieve.simple = true;
			   $scope.searchNodeRetrieve.fields = {nid : true};
			   
			   $scope.callSearchNodeRecourceRetrieve = function(searchNodeRetrieve) {
				   console.log(searchNodeRetrieve); 
				   requestStart = Date.now();
				   SearchNodeResource.retrieve(searchNodeRetrieve).then(
				    		//success
				    		function(data) {
				    			console.log('search-node retrieve request success'); 
				    		},
				    		//error
				    		function(data) {
				    			console.log('search-node retrieve request error'); 
				    		}
				    );
			   };
			   //
			   SearchNodeResourceChannel.onSearchNodeRetrieveConfirmed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.search-nodeRetrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			 
			   SearchNodeResourceChannel.onSearchNodeRetrieveFailed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.searchNodeRetrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			    

			    
}]);


