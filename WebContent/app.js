//var app = angular.module('myApp', [ 'ngRoute','ngCookies','ngFileUpload' ]);
var app = angular.module('myApp', [ 'ngRoute','ngCookies']);
app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 's_home/home.html'
		
	})

	.when('/manageUser', {
		templateUrl : 's_admin/manage_users.html',
		controller : 'AdminController'
	})

	.when('/event', {
		templateUrl : 's_upload/upload.html',
		controller : 'FileUploadController'
	})

	.when('/about', {
		templateUrl : 's_about/about.html',
		controller : 'AboutController'
	})

	.when('/login', {
		templateUrl : 's_user/login.html',
		controller : 'UserController'
	})

	.when('/register', {
		templateUrl : 's_user/register.html',
		controller : 'UserController'
	})
	
	.when('/myProfile', {
		templateUrl : 's_user/my_profile.html',
		controller : 'UserController'
	})
	
	.when('/manage_users', {
		templateUrl : 's_admin/manage_users.html',
		controller : 'UserController'
	})


	/**
	 * Blog related mapping
	 */

	.when('/create_blog', {
		templateUrl : 's_blog/create_blog.html',
		controller : 'BlogController'
	})

	.when('/list_blog', {
		templateUrl : 's_blog/list_blog.html',
		controller : 'BlogController'
	})

	.when('/view_blog', {
		templateUrl : 's_blog/view_blog.html',
		controller : 'BlogController'
	})

	/**
	 * Friend related mapping
	 */

	.when('/add_friend', {
		templateUrl : 's_friend/add_friend.html',
		controller : 'FriendController'
	})

	.when('/search_friend', {
		templateUrl : 's_friend/search_friend.html',
		controller : 'FriendController'
	})

	.when('/view_friend', {
		templateUrl : 's_friend/view_friend.html',
		controller : 'FriendController'
	})
	
	.when('/viewFriendRequest', {
		templateUrl : 's_friend/view_friend_request.html',
		controller : 'FriendController'
	})
	
	.when('/chat', {
		templateUrl : 's_chat/chat.html',
		controller : 'ChatController'
	})
	
	.when('/chat_forum', {
		templateUrl : 's_chat_forum/chat_forum.html',
		controller : 'ChatForumController'
	})



	/**
	 * Job related mappings
	 */
	.when('/job', {
		templateUrl : 's_job/job.html',
		controller : 'JobController'
	})

	.when('/search_job', {
		templateUrl : 's_job/search_job.html',
		controller : 'JobController'
	})

	.when('/view_applied_jobs', {
		templateUrl : 's_job/view_applied_jobs.html',
		controller : 'JobController'
	})
	
	.when('/view_job_details', {
		templateUrl : 's_job/view_job_details.html',
		controller : 'JobController'
	})

	.when('/post_job', {
		templateUrl : 's_job/post_job.html',
		controller : 'JobController'
	})

	.otherwise({
		redirectTo : '/'
	});
});

app.run( function ($rootScope, $location,$cookieStore, $http) {

	 $rootScope.$on('$locationChangeStart', function (event, next, current) {
		 console.log("$locationChangeStart")
		 //http://localhost:8080/Collaboration/addjob
	        // redirect to login page if not logged in and trying to access a restricted page
	        var restrictedPage = $.inArray($location.path(), ['','/','/search_job','/view_blog','/login', '/register','/list_blog']) === -1;
		 console.log("Navigating to page :" + $location.path())
	        console.log("restrictedPage:" +restrictedPage)
	        console.log("currentUser:" +$rootScope.currentUser)
	        var loggedIn = $rootScope.currentUser.id;
	        
	        console.log("loggedIn:" +loggedIn)
	        
	        if(!loggedIn)
	        	{
	        	
	        	 if (restrictedPage) {
		        	  console.log("Navigating to login page:")
		        	

						            $location.path('/login');
		                }
	        	}
	        
			 else //logged in
	        	{
	        	
				 var role = $rootScope.currentUser.role;
				 var userRestrictedPage = $.inArray($location.path(), ["/post_job"]) == 0;
				 
				 if(userRestrictedPage && role!='admin' )
					 {
					 
					  alert("You can not do this operation as you are logged as : " + role )
					   $location.path('/login');
					 
					 }
				     
	        	
	        	}
	        
	 }
	       );
	 
	 
	 // keep user logged in after page refresh
     $rootScope.currentUser = $cookieStore.get('currentUser') || {};
     if ($rootScope.currentUser) {
         $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.currentUser; 
     }

});


 
    
    
