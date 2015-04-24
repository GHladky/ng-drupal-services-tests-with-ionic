/* Controllers of apiServicesControllers component */
//______________________________________________

var anonEntityNodeResourceControllers = angular.module('resources.entity-node-resource.controllers', ['EntityNodeResourceModules', 'drupalBaseModules']);


/* EntityNode Resource Controller */
anonEntityNodeResourceControllers.controller('ResourcesEntityNodeResourceCtrl', 
		   ['$scope', 'BaseResource', 'EntityNodeResource', 'EntityNodeResourceChannel',
    function($scope,   BaseResource,   EntityNodeResource,   EntityNodeResourceChannel) {
			   
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
			   			   
				   var requestEnd = requestStart = undefined;
				   //for attache file tests to detect browser or phone
				   $scope.isWebview = ionic.Platform.isWebView();
				   
				   
			   //
			   //EntityNode Resource 
			   //
				   
			   //Retrieve
			   $scope.nodeRetrieveRequests = [];
			   
			   //path params for retrieve request
			   $scope.nodeRetrieve = {};
			   $scope.nodeRetrieve.nid = 1;
			   
			   $scope.callEntityNodeRecourceRetrieve = function(nid) {
				   
				   requestStart = Date.now();
				   EntityNodeResource.retrieve(nid).then(
				    		//success
				    		function(data) {
				    			console.log('entity-node retrieve request success'); 
				    		},
				    		//error
				    		function(data) {
				    			console.log('entity-node retrieve request error'); 
				    		}
				    );
			   };
			   //
			   EntityNodeResourceChannel.onEntityNodeRetrieveConfirmed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.nodeRetrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			 
			   EntityNodeResourceChannel.onEntityNodeRetrieveFailed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.nodeRetrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			    
			   //Create
			  
			   $scope.nodeCreateRequests = [];
			   
			   
			   //get params for create request
			   //NOTE: username is set automatically on server through authed request
			   $scope.nodeCreate = {};
			   $scope.nodeCreate.type = 'page'; 
			   $scope.nodeCreate.title = 'testtitle'; 
			    
			   console.log( $scope.nodeCreate.body); 
			  
			   $scope.callEntityNodeRecourceCreate = function(node) {
				   requestStart = Date.now();
				   EntityNodeResource.create(node).then(
				    		//success
				    		function(data) {
				    			console.log('entity-node create request success'); 
				    		},
				    		//error
				    		function(data) {
				    			console.log('entity-node create request error'); 
				    		}
				    );
			   };
			    //
			   EntityNodeResourceChannel.onEntityNodeCreateConfirmed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.nodeCreateRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			   EntityNodeResourceChannel.onEntityNodeCreateFailed($scope, function(data) { 
				   requestEnd = Date.now();
	    		   $scope.nodeCreateRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
			   });
			    
				   //Update
				  
				   $scope.nodeUpdateRequests = [];
				   
				   //get params for create request
				   //NOTE: username is set automatically on server through authed request
				   $scope.nodeUpdate = {};
				   $scope.nodeUpdate.nid = null; 
				   $scope.nodeUpdate.title = 'test titel edited';
				   
				   $scope.callEntityNodeRecourceUpdate = function(node) {
					   
					   var updateNid = node.nid;
					   delete node.nid;
					   
					   requestStart = Date.now();
					   EntityNodeResource.update(updateNid, node).then(
					    		//success
					    		function(data) {
					    			console.log('entity-node update request success'); 
					    		},
					    		//error
					    		function(data) {
					    			console.log('entity-node update request error'); 
					    		}
					    );
				   };
				   //
				   EntityNodeResourceChannel.onEntityNodeUpdateConfirmed($scope, function(data) { 
					   requestEnd = Date.now();
		    		   $scope.nodeUpdateRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
				   });
				   EntityNodeResourceChannel.onEntityNodeUpdateFailed($scope, function(data) { 
					   requestEnd = Date.now();
		    		   $scope.nodeUpdateRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
				   });
				    
			    
				   //Delete
				   $scope.nodeDeleteRequests = [];
				   
				   //get params for create request
				   //NOTE: username is set automatically on server through authed request
				   $scope.nodeDelete = {};
				   $scope.nodeDelete.nid = null;

				   $scope.callEntityNodeRecourceDelete = function(nid) {
					   requestStart = Date.now();
					   EntityNodeResource._delete(nid).then(
							  
					    		//success
					    		function(data) {
					    			console.log('entity-node delete request success'); 
					    		},
					    		//error
					    		function(data) {
					    			console.log('entity-node delete request error'); 
					    		}
					    );
				    };
				    //
					EntityNodeResourceChannel.onEntityNodeDeleteConfirmed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.nodeDeleteRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					});
					EntityNodeResourceChannel.onEntityNodeDeleteFailed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.nodeDeleteRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					});
					   
					   //Index
					   
					   $scope.nodeIndexRequests = [];
					   
					   //get params for index request
					   $scope.nodeIndex = {};
					   $scope.nodeIndex.page = null;
					   
					   $scope.nodeIndex.fields = {};
					   $scope.nodeIndex.fields.nid = true;
					   $scope.nodeIndex.fields.created = true;
					   $scope.nodeIndex.fields.type = true;
					   $scope.nodeIndex.fields.title = true;
					   
					   $scope.nodeIndex.parameters = {};
					   $scope.nodeIndex.pagesize = null;
					   
					   $scope.callEntityNodeRecourceIndex = function(nodeIndex) {
						   requestStart = Date.now();
						   console.log(nodeIndex);
						   EntityNodeResource.index(nodeIndex).then(
						    		//success
						    		function(data) { 
						    			console.log('entity-node index request success');  
						    		},
						    		//error
						    		function(data) {
						    			console.log('entity-node index request error'); 
						    	    }
						    );
					    };
					    //
					   EntityNodeResourceChannel.onEntityNodeIndexConfirmed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.nodeIndexRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });
					   EntityNodeResourceChannel.onEntityNodeIndexFailed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.nodeIndexRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });

					   //Files
					   $scope.nodeFilesRequests = [];
					   
					   //path params for retrieve request
					   $scope.nodeFiles = {};
					   $scope.nodeFiles.nid = 707;
					   $scope.nodeFiles.file_contents = 1;
					   $scope.nodeFiles.image_styles = 1;
					   
					   $scope.callEntityNodeResourceFiles = function(nodeFiles) {
						   
						   requestStart = Date.now();
						   EntityNodeResource.files(nodeFiles.nid, nodeFiles.file_contents, nodeFiles.image_styles).then(
						    		//success
						    		function(data) {
						    			console.log('entity-node files request success'); 
						    		},
						    		//error
						    		function(data) {
						    			console.log('entity-node files request error'); 
						    		}
						    );
					   };
					   //
					   EntityNodeResourceChannel.onEntityNodeFilesConfirmed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.nodeFilesRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });
					 
					   EntityNodeResourceChannel.onEntityNodeFilesFailed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.nodeFilesRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });
					   
					 //Comments
					   $scope.nodeCommentsRequests = [];
					   
					   $scope.nodeComments = {};
					   $scope.nodeComments.nid = 707;
					   $scope.nodeComments.count = 5;
					   $scope.nodeComments.offset = 2;
					   
					   $scope.callEntityNodeResourceComments = function(nodeComments) {
						   
						   requestStart = Date.now();
						   EntityNodeResource.comments(nodeComments.nid, nodeComments.count, nodeComments.offset).then(
						    		//success
						    		function(data) {
						    			console.log('entity-node comments request success'); 
						    		},
						    		//error
						    		function(data) {
						    			console.log('entity-node comments request error'); 
						    		}
						    );
					   };
					   //
					   EntityNodeResourceChannel.onEntityNodeCommentsConfirmed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.nodeCommentsRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });
					 
					   EntityNodeResourceChannel.onEntityNodeCommentsFailed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.nodeCommentsRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });
					   
					   
					   //Attach File
					   $scope.nodeAttachFileRequests = [];
					   
					   $scope.nodeAttachFile = {};
					   $scope.nodeAttachFile.nid = 707;
					   $scope.nodeAttachFile.field_name = 'field_image', 
					   $scope.nodeAttachFile.attach = "R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7", 
					   $scope.nodeAttachFile.field_values = {};
					   $scope.nodeAttachFile.field_values.title = 'AttachFile title';
					   $scope.nodeAttachFile.field_values.alt = 'AttachFile alt'
							   
					   
					   document.addEventListener("deviceready", function () {

						    var options = {
						      quality: 50,
						      destinationType: Camera.DestinationType.DATA_URL,
						      sourceType: Camera.PictureSourceType.CAMERA,
						      allowEdit: true,
						      encodingType: Camera.EncodingType.JPEG,
						      targetWidth: 100,
						      targetHeight: 100,
						      popoverOptions: CameraPopoverOptions,
						      saveToPhotoAlbum: false
						    };

						    $cordovaCamera.getPicture(options).then(function(imageData) {
						     
						      $scope.nodeAttachFile.attach = "data:image/jpeg;base64," + imageData;
						      console.log(' $cordovaCamera.getPicture success');
						      console.log(imageData, $scope.nodeAttachFile.attach); 
						    }, function(err) {
						      // error
						    	console.log(' $cordovaCamera.getPicture error'); 
						    });

						  }, false);
					   
					   
					   
					   
					   
					   
					   
					   $scope.callEntityNodeResourceAttachFile = function(nodeAttachFile) {
						   requestStart = Date.now();
						   EntityNodeResource.attach_file(nodeAttachFile.nid, nodeAttachFile.field_name, nodeAttachFile.attach, nodeAttachFile.field_values).then(
						    		//success
						    		function(data) {
						    			console.log('entity-node attach_file request success'); 
						    		},
						    		//error
						    		function(data) {
						    			console.log('entity-node attach_file request error'); 
						    		}
						    );
					   };
					   //
					   EntityNodeResourceChannel.onEntityNodeAttachFileConfirmed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.nodeAttachFileRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });
					 
					   EntityNodeResourceChannel.onEntityNodeAttachFileFailed($scope, function(data) { 
						   requestEnd = Date.now();
			    		   $scope.nodeAttachFileRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
					   });

			    
}]);


