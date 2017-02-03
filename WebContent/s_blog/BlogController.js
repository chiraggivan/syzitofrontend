'use strict';

app.controller('BlogController',['$scope','BlogService','$location','$rootScope','$cookieStore','$http',
          function($scope, BlogService,$location,$rootScope,$cookieStore,$http){
			console.log("BlogController.....");
			var self = this;
			self.blog = {
					id:'', 
					name : '', 
					description : '',
					userID : '', 
					likes : '', 
					errorCode : '',
					errorMessage : ''											
				};
			self.blogs = [];
			
			$scope.orderByMe = function(x){
				$scope.nyOrderBy = x;
			}
			
			self.getAllBlogs = function(){
				console.log("->-> starting getAllBlogs() function from BlogController.js");
				BlogService.getAllBlogs().then(
						function(d){
							self.jobs = d;
						},
						function(errResponse){
							console.error('Error while get all the Blogs that are valid');
						}
				)
			};
			
			self.getMyBlogs = function(){
				console.log("->-> starting getMyBlogs() function from BlogController.js");
				var currentUser = $rootScope.currentUser;
				console.log("currentUser.id : " + currentUser.id);
				//if(currentUser)--> not null, not empty and defined
				if (typeof currentUser.id == 'undefined')
					{
					alert("Please login to apply for this ")
					console.log("User not logged in. Cannot apply for this job.")
					$location.path('/login');
					}
				
				console.log("---> userID : "+currentUser.id+" finding out all his/her blogs");
			
				BlogService.getMyBlogs().then(
						function(d){
							self.jobs = d;
						},
						function(errResponse){
						console.error('Error while get all the my Blogs that are approved');
						}
				)
			};
							
			self.blogDetails = function(blogID){
				console.log("->-> starting blogDetails(blogID) function from BlogController.js");
				BlogService.blogDetails(blogID).then(
						function(d){
							self.jobs = d;
						},
						function(errResponse){
							console.error('Error while get all the Blog details');
						}
				)
			};
								
			self.postBlog = function(blog){
				console.log("->-> starting postBlog(blog) function from BlogController.js");
				var currentUser = $rootScope.currentUser;
				console.log("currentUser.id : " + currentUser.id);
				//if(currentUser)--> not null, not empty and defined
				if (typeof currentUser.id == 'undefined')
					{
					alert("Please login to post this blog ")
					console.log("User not logged in. Cannot post blog.")
					$location.path('/login');
					}
				
				console.log("---> userID : "+currentUser.id+" trying to post a  blog");
			
				BlogService.getMyBlogs().then(
						function(d){
							self.jobs = d;
						},
						function(errResponse){
							console.error('Error while get all the my Blogs that are approved');
						}
				)
			};
			
			self.deleteBlog = function(blog){
				console.log("->-> starting deleteBlog(blog) function from BlogController.js");
				var currentUser = $rootScope.currentUser;
				console.log("currentUser.id : " + currentUser.id);
				//if(currentUser)--> not null, not empty and defined
				if (typeof currentUser.role == 'S')
					{
					alert("You cannot delete this blog. Only admin/employee has the right to delete blog.")
					console.log("User not delete. User is not admin to delete blog.")
					$location.path('/');
					}
				
				console.log("---> userID : "+currentUser.id+" trying to delete a  blog");
			
				BlogService.deleteBlog(blog).then(
						function(d){
							self.jobs = d;
						},
						function(errResponse){
							console.error('Error while get all the my Blogs that are approved');
						}
				)
			};
			
		            
		}]);