// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var drupalIonicAngularJSAPIClient = angular.module('ngDrupalIonicTests', [
                                                                          
  'ionic',
  
  'drupal.configurations',
  'app.controllers',
  'common.accesss-control',
  'common.localstorage',
  'ApiAuthModules',
  
  'resources.entity-node-resource.controllers',
  'resources.search-node-resource.controllers',
  'resources.menu-resource.controllers',
  'resources.comment-resource.controllers',
  'resources.taxonomy-vocabulary-resource.controllers',
  'resources.taxonomy-term-resource.controllers',
  'resources.file-resource.controllers',
  'resources.node-resource.controllers',
  'resources.system-resource.controllers',
  'resources.user-resource.controllers',
  'resources.views-resource.controllers',

]);

drupalIonicAngularJSAPIClient
	.config( [  '$stateProvider', '$urlRouterProvider', '$httpProvider',  'drupalApiConfig',
     function (  $stateProvider,   $urlRouterProvider,   $httpProvider,    drupalApiConfig ) {
		
		//edit drupal config
		drupalApiConfig.drupal_instance = 'http://www.drupalionic.org/drupal_test/';
		drupalApiConfig.api_endpoint += 'v1/';
		
		//
		$stateProvider
          .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "app/templates/base_view.html",
            controller: 'AppCtrl'           
          })
          //    
	      //Abstract states for anonymous tabs
		  //______________________________________________
		  .state('app.overview', {
		    url: '/overview',
		    views: {
			      'menuContent': {
			    	templateUrl: 'app/components/overview/overview.html',
			      }
			    }
		  })
		
	      //    
	      //Abstract states for anonymous tabs
		  //______________________________________________
		  .state('app.resources-tabs', {
		    url: '/resources-tabs',
		    abstract: true,
		    views: {
			      'menuContent': {
			    	templateUrl: 'app/components/resources-tabs/resources-tabs.html',
			      }
			    }
		  })
		  
		  .state('app.login', {
            url: '/login',
            views: {
              'menuContent': {
                templateUrl: 'app/components/login/login.html',
                controller: 'LoginCtrl'
              }
            }
          })
		  
		  //
		  //Entity Node Resource
		  //______________________________________________
		   .state('app.resources-tabs.entity-node-resource', {
		    url: '/entity-node-recource',
		    views: {
			      'entity-node-resource': {
			    	templateUrl: 'app/components/resources-tabs/entity-node-resource/entity-node-resource.html',
			  		controller:  'ResourcesEntityNodeResourceCtrl' 
			      }
			    }
		   })
		  
		  //
		  //Comment Resource
		  //______________________________________________
		  .state('app.resources-tabs.comment-resource', {
		  url: '/comment-recource',
		  views: {
			      'comment-resource': {
			    	templateUrl: 'app/components/resources-tabs/comment-resource/comment-resource.html',
			  		controller:  'ResourcesCommentResourceCtrl' 
			      }
			    }
		   })
		   
		  //
		  //Search Node Resource
		  //______________________________________________
		  .state('app.resources-tabs.search-node-resource', {
		  url: '/search-node-recource',
		  views: {
			      'search-node-resource': {
			    	templateUrl: 'app/components/resources-tabs/search-node-resource/search-node-resource.html',
			  		controller:  'ResourcesSearchNodeResourceCtrl' 
			      }
			    }
		   })
		   
		  
		  //
		  //Menu Resource
		  //______________________________________________
		  .state('app.resources-tabs.menu-resource', {
		  url: '/menu-recource',
		  views: {
			      'menu-resource': {
			    	templateUrl: 'app/components/resources-tabs/menu-resource/menu-resource.html',
			  		controller:  'ResourcesMenuResourceCtrl' 
			      }
			    }
		   })
		   
		  //
		  //Taxonomy Vocabulary Resource
		  //______________________________________________
		  .state('app.resources-tabs.taxonomy-vocabulary-resource', {
		  url: '/taxonomy-vocabulary-recource',
		  views: {
			      'taxonomy-vocabulary-resource': {
			    	templateUrl: 'app/components/resources-tabs/taxonomy-vocabulary-resource/taxonomy-vocabulary-resource.html',
			  		controller:  'ResourcesTaxonomyVocabularyResourceCtrl' 
			      }
			    }
		   })
		  
		  //
		  //Taxonomy Terms Resource
		  //______________________________________________
		  .state('app.resources-tabs.taxonomy-term-resource', {
		  url: '/taxonomy-term-recource',
		  views: {
			      'taxonomy-term-resource': {
			    	templateUrl: 'app/components/resources-tabs/taxonomy-term-resource/taxonomy-term-resource.html',
			  		controller:  'ResourcesTaxonomyTermResourceCtrl' 
			      }
			    }
		   })
		   
		   //
		   //File Resource
		   //______________________________________________
		   .state('app.resources-tabs.file-resource', {
		    url: '/file-recource',
		    views: {
			      'file-resource': {
			    	templateUrl: 'app/components/resources-tabs/file-resource/file-resource.html',
			  		controller:  'ResourcesFileResourceCtrl' 
			      }
			    }
		   })
		 
		  //
		  //Node Resource
		  //______________________________________________
		   .state('app.resources-tabs.node-resource', {
		    url: '/node-recource',
		    views: {
			      'node-resource': {
			    	templateUrl: 'app/components/resources-tabs/node-resource/node-resource.html',
			  		controller:  'ResourcesNodeResourceCtrl' 
			      }
			    }
		   })
		  //
		  //System Resource
		  //______________________________________________
		   .state('app.resources-tabs.system-resource', {
		    url: '/system-recource',
		    views: {
			      'system-resource': {
			    	templateUrl: 'app/components/resources-tabs/system-resource/system-resource.html',
			  		controller:  'ResourcesSystemResourceCtrl' 
			      }
			    }
		   })
		   //
		   //User Resource
		   //______________________________________________
		   .state('app.resources-tabs.user-resource', {
		    url: '/user-recource',
		    views: {
			      'user-resource': {
			    	templateUrl: 'app/components/resources-tabs/user-resource/user-resource.html',
			  		controller:  'ResourcesUserResourceCtrl' 
			      }
			    }
		   })
		    //Views Resource
		   //______________________________________________
		   .state('app.resources-tabs.views-resource', {
		    url: '/views-recource',
		    views: {
			      'views-resource': {
			    	templateUrl: 'app/components/resources-tabs/views-resource/views-resource.html',
			  		controller:  'ResourcesViewsResourceCtrl' 
			      }
			    }
		   });
  
  $urlRouterProvider.otherwise('/app/overview');
  
  
}]);



drupalIonicAngularJSAPIClient.run(['$rootScope', 'drupalApiConfig',  '$urlRouter',  '$ionicLoading', 'ApiAuthService', 'AccessControlService', '$state',
                          function ($rootScope,   drupalApiConfig,    $urlRouter,    $ionicLoading,   ApiAuthService,   AccessControlService,   $state) {
	
     //http://angular-ui.github.io/ui-router/site/#/api/ui.router.router.$urlRouterProvider#methods_deferintercept
     $rootScope.$on('$locationChangeSuccess', function(e) {
   
       	 	if ( ApiAuthService.getLastConnectTime() > ( Date.now() - drupalApiConfig.session_expiration_time ) || ApiAuthService.getLastConnectTime() > 0 ) {
       	 		//sync the current URL to the router
    	    	$urlRouter.sync();
    	    	return;
    	    }
    	 
    	    // Prevent $urlRouter's default handler from firing
    	    e.preventDefault();
    	    $rootScope.$broadcast('loading:show', { loading_settings : {template:"<p><ion-spinner></ion-spinner><br/>Connect with System...</p>"} });
    	    // init or refresh Authentication service connection    
    	    ApiAuthService.refreshConnection().then(
    	    	function() {
    	    		$rootScope.$broadcast('loading:hide');
    	    		//sync the current URL to the router 
    	    		$urlRouter.sync();
    	    	},
    	    	function() {
    	    		$rootScope.$broadcast('loading:hide');
    	    		//sync the current URL to the router 
    	    		$urlRouter.sync();
    	    	}
    	    );
    	 
    	  // Configures $urlRouter's listener *after* your custom listener
    	  $urlRouter.listen();
	});
    
    //redirection logic end
    $rootScope.$on('loading:show', function (event, args) {
    	$ionicLoading.show((args && 'loading_settings' in args) ? args.loading_settings:{});
    });
      
    $rootScope.$on('loading:hide', function (event, args) {
        $ionicLoading.hide()
    });
      
}]);

