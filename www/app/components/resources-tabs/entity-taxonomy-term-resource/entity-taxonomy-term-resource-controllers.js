/* Controllers of apiServicesControllers component */
//______________________________________________

var entityTaxonomyTermResourceControllers = angular.module('resources.entity-taxonomy-term-resource.controllers', ['EntityTaxonomyTermResourceModules']);


/* EntityTaxonomyTerm Resource Controller */
entityTaxonomyTermResourceControllers.controller('ResourcesEntityTaxonomyTermResourceCtrl', 
		   ['$scope', 'EntityTaxonomyTermResource', 'EntityTaxonomyTermResourceChannel',
    function($scope,   EntityTaxonomyTermResource,   EntityTaxonomyTermResourceChannel) {
			   
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
		   			   
			   var requestEnd = requestStart =  taxonomyTerm = undefined;
			   //for attache taxonomyTerm tests to detect browser or phone
			   $scope.isWebview = ionic.Platform.isWebView();
				   
				   
			   //
			   //EntityTaxonomyTerm Resource 
			   //
				   
			   //Retrieve
			  
			   $scope.entityTaxonomyTermRetrieveRequests = [];
			   
			   //path params for retrieve request
			   $scope.entityTaxonomyTermRetrieve = {};
			   $scope.entityTaxonomyTermRetrieve.tid = 1;
			   
			   $scope.callEntityTaxonomyTermRecourceRetrieve = function(tid) {
				   taxonomyTerm = undefined;
				   requestStart = Date.now();
				   EntityTaxonomyTermResource.retrieve(tid).then(
				    		//success
				    		function(data) {
				    			console.log('taxonomyTerm retrieve request success'); 
				    		},
				    		//error
				    		function(data) {
				    			console.log('taxonomyTerm retrieve request error'); 
				    		}
				    );
			   };
			   //
			   EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermRetrieveConfirmed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.entityTaxonomyTermRetrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			 
			   EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermRetrieveFailed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.entityTaxonomyTermRetrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			    
			   //Create
			  
			   $scope.entityTaxonomyTermCreateRequests = [];
			  
			   //get params for create request
			   //NOTE: username is set automatically on server through authed request
			   $scope.taxomonyTermCreate 			 = {};
			   $scope.taxomonyTermCreate.name 		 = "term name";
			   $scope.taxomonyTermCreate.description = 'term description';
			   $scope.taxomonyTermCreate.format 	 = "plain_text";
			   $scope.taxomonyTermCreate.weight 	 = 1;
			   $scope.taxomonyTermCreate.vocabulary_machine_name = "custom_fields_test";			   

			   $scope.callEntityTaxonomyTermRecourceCreate = function(taxonomyTermCreate) {
				   requestStart = Date.now();
				   EntityTaxonomyTermResource.create(taxonomyTermCreate).then(
				    		//success
				    		function(data) {
				    			console.log('taxonomyTerm create request success'); 
				    		},
				    		//error
				    		function(data) {
				    			console.log('taxonomyTerm create request error'); 
				    		}
				    );
			    };
			    //
			   EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermCreateConfirmed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.entityTaxonomyTermCreateRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			   EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermCreateFailed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.entityTaxonomyTermCreateRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			   
			   //Update
				  
			   $scope.entityTaxonomyTermUpdateRequests = [];
			   
			   //get params for create request
			   //NOTE: username is set automatically on server through authed request
			   $scope.entityTaxonomyTermUpdate = {};
			   $scope.entityTaxonomyTermUpdate.tid = 10; 
			   $scope.entityTaxonomyTermUpdate.vid = 1; 
			   $scope.entityTaxonomyTermUpdate.name = 'name edited'; 
			   $scope.entityTaxonomyTermUpdate.description = 'description edited';
			   
			   $scope.callEntityTaxomonyTermRecourceUpdate = function(term) {
				   console.log(term); 
				   var tid = term.tid;
				   delete term.tid;
				   
				   requestStart = Date.now();
				   EntityTaxonomyTermResource.update(tid, term).then(
				    		//success
				    		function(data) {
				    			console.log('taxonomyTerm update request success'); 
				    		},
				    		//error
				    		function(data) {
				    			console.log('taxonomyTerm update request error'); 
				    		}
				    );
			    };
			    //
			   EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermUpdateConfirmed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.entityTaxonomyTermUpdateRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			   EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermUpdateFailed($scope, function(data) { 
				   console.log(data); 
				   requestEnd = Date.now();
	    		   $scope.entityTaxonomyTermUpdateRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			    
		    
			    
				   //Delete
				   $scope.entityTaxonomyTermDeleteRequests = [];
				   
				   //get params for create request
				   //NOTE: username is set automatically on server through authed request
				   $scope.entityTaxonomyTermDelete = {};
				   $scope.entityTaxonomyTermDelete.tid = null;

				   $scope.callEntityTaxonomyTermRecourceDelete = function(tid) {
					   requestStart = Date.now();
					   EntityTaxonomyTermResource._delete(tid).then(
							  
					    		//success
					    		function(data) {
					    			console.log('taxonomyTerm delete request success'); 
					    		},
					    		//error
					    		function(data) {
					    			console.log('taxonomyTerm delete request error'); 
					    		}
					    );
				    };
				    //
					EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermDeleteConfirmed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.entityTaxonomyTermDeleteRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					});
					EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermDeleteFailed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.entityTaxonomyTermDeleteRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					});
					   
					   //Index
					   
					   $scope.entityTaxonomyTermIndexRequests = [];
					   
					   //get params for index request
					   $scope.entityTaxonomyTermIndex = {};
					   $scope.entityTaxonomyTermIndex.page = null;
					   
					   $scope.entityTaxonomyTermIndex.fields = {};
					   $scope.entityTaxonomyTermIndex.fields.tid = true;
					   $scope.entityTaxonomyTermIndex.fields.vid = true;
					   $scope.entityTaxonomyTermIndex.fields.name = true;
					   $scope.entityTaxonomyTermIndex.fields.description = true;
					   $scope.entityTaxonomyTermIndex.fields.format = true;
					   $scope.entityTaxonomyTermIndex.fields.weight = true;			
					   $scope.entityTaxonomyTermIndex.fields.vocabulary_machine_name = true;	
   
					   $scope.entityTaxonomyTermIndex.parameters = {};
					   $scope.entityTaxonomyTermIndex.pagesize = null;
					   
					   $scope.callEntityTaxonomyTermRecourceIndex = function(taxonomyTermIndex) {
						   requestStart = Date.now();
						   taxonomyTerm = undefined;
						   console.log(taxonomyTermIndex);
						   EntityTaxonomyTermResource.index(taxonomyTermIndex).then(
						    		//success
						    		function(data) { 
						    			console.log('taxonomyTerm index request success');  
						    		},
						    		//error
						    		function(data) {
						    			console.log('taxonomyTerm index request error'); 
						    	    }
						    );
					    };
					    //
					   EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermIndexConfirmed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.entityTaxonomyTermIndexRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });
					   EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermIndexFailed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.entityTaxonomyTermIndexRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });
					   
					   //SelectNode
					   $scope.entityTaxonomyTermSelectNodeRequests = [];
					   
					   $scope.entityTaxonomyTermSelectNode = {};
					   $scope.entityTaxonomyTermSelectNode.tid = 10;
					   $scope.entityTaxonomyTermSelectNode.pager = 1;
					   $scope.entityTaxonomyTermSelectNode.limit = 2;
					   $scope.entityTaxonomyTermSelectNode.order = 1;
					   
					   $scope.callEntityTaxonomyTermResourceSelectNodes = function(selectEntityTaxonomyTermsSelectNode) {
						   requestStart = Date.now();
						   EntityTaxonomyTermResource.selectNodes(selectEntityTaxonomyTermsSelectNode.tid).then(
						    		//success
						    		function(data) {
						    			console.log('taxonomyTerm SelectNode request success'); 
						    		},
						    		//error
						    		function(data) {
						    			console.log('taxonomyTerm SelectNode request error'); 
						    		}
						    );
					   };
					   //
					   EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermSelectNodesConfirmed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.entityTaxonomyTermSelectNodeRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });
					 
					   EntityTaxonomyTermResourceChannel.onEntityTaxonomyTermSelectNodesFailed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.entityTaxonomyTermSelectNodeRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });
					   
					   
					   
					   
					   
			
			    
}]);


