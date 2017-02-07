app.factory('BlogService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("BlogService...")
	
	var BASE_URL='http://localhost:8083/testbackend'
		
    return {
		
		getAllBlogs : function(){
			console.log("--> getAllBlogs() function in BlogService.js");
			console.log("--> calling url :"+ BASE_URL+"/getAllBlogs");
			return $http.get(BASE_URL+"/getAllBlogs").then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting all the blogs in blogService.js');
						return $q.reject(errResponse);
					}
				);
		},
		
		getMyBlogs : function(currentUserID){
			console.log("--> getMyBlogs() function in BlogService.js");
			console.log("--> calling url :"+ BASE_URL+"/getMyBlogs");
			return $http.get(BASE_URL+"/getMyBlogs").then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting my blogs in BlogService.js');
						return $q.reject(errResponse);
					}
				);
		},
	
		blogDetails : function(blogID){
			console.log("--> blogDetails(blogID) function in BlogService.js");
			console.log("--> calling url :"+ BASE_URL+"/blogDetails/"+blogID);
			return $http.get(BASE_URL+"/blogDetails/"+blogID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting blog details in BlogService.js');
						return $q.reject(errResponse);
					}
				);
		},
		
		postBlog : function(blog){
			console.log("--> postBlog(blog object) function in BlogService.js");
			console.log("--> calling url :"+ BASE_URL+"/postBlog     along with blog object as post");
			return $http.post(BASE_URL+"/postBlog",blog).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while posting blog in BlogService.js');
						return $q.reject(errResponse);
					}
				);
		},
		
		blogCommented : function(blogComment, blogID){
			console.log("--> blogCommented(blogComment object, blogID) function in BlogService.js");
			console.log("--> calling url :"+ BASE_URL+"/blogCommented   " +
							"along with blogComment object and blog ID as post");
			return $http.post(BASE_URL+"/blogCommented",blogComment,blogID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while commenting on blog in BlogService.js');
						return $q.reject(errResponse);
					}
				);
		},
		
		deleteComment : function(blogComment, blogID){
			console.log("--> blogCommented(blogComment object, blogID) function in BlogService.js");
			console.log("--> calling url :"+ BASE_URL+"/blogCommented   " +
							"along with blogComment object and blog ID as post");
			return $http.post(BASE_URL+"/blogCommented",blogComment,blogID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while commenting on blog in BlogService.js');
						return $q.reject(errResponse);
					}
				);
		},
		
		deleteBlog : function(blog){
			console.log("--> deleteBlog(blog) function in BlogService.js");
			console.log("--> calling url :"+ BASE_URL+"/deleteBlog   " +
							"along with blog object as post");
			return $http.post(BASE_URL+"/blogCommented",blog).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while commenting on blog in BlogService.js');
						return $q.reject(errResponse);
					}
				);
		},
		
		
		
		
	};
      
}]);