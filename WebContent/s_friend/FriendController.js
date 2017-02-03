'use strict';


app.controller('friendController',['$scope','FriendService','$location','$rootScope','$cookieStore','$http',
               function($scope, JobService,$location,$rootScope,$cookieStore,$http){
					console.log("FriendController.....");
					var self = this;
					self.Friend = {
								id:'', 
								userID : '', 
								friendID : '',
								status : '', 
								isOnline : '',  
								errorCode : '',	
								errorMessage : ''											
					};
					self.Friends = [];
									
					$scope.orderByMe = function(x){
					$scope.nyOrderBy = x;
					}
									
					self.getMyFriends = function(){
						console.log("->-> getMyFriends() in FriendController.js");
						var currentUser = $rootScope.currentUser;
						console.log("currentUser.id : " + currentUser.id);
						//if(currentUser)--> not null, not empty and defined
						if (typeof currentUser.id == 'undefined')
							{
							alert("Please login to see all you friends.")
							console.log("User not logged in. Cannot check his/her friends' list.")
							$location.path('/login');
							}
						
						console.log("---> userID : "+currentUser.id+" finding out all his/her friend");
					
						FriendService.getMyFriends().then(
								function (d){
									self.Friends = d;
								},
								function(errResponse){
									console.error('Error while fetching all my friends');
								}
						);
					};
									
				self.sendFriendRequest = function(friendID){
					console.log("->-> sendFriendRequest(userID) in FriendController.js");
					var currentUser = $rootScope.currentUser;
					console.log("currentUser.id : " + currentUser.id);
					if (typeof currentUser.id == 'undefined')
						{
						alert("Please login to see all you friends.")
						console.log("User not logged in. Cannot check his/her friends' list.")
						$location.path('/login');
						}
					
					console.log("---> userID : "+currentUser.id+" sending friend request to :"+friendID);
				
					FriendService.sendFriendRequest(friendID).then(
							function (d){
								self.Friends = d;
							},
							function(errResponse){
								console.error('Error while fetching all my friends');
							}
					);
				};
				
				self.unFriend = function(friendID){
					console.log("->-> unFriend(userID) in FriendController.js");
					var currentUser = $rootScope.currentUser;
					console.log("currentUser.id : " + currentUser.id);
					if (typeof currentUser.id == 'undefined')
						{
						alert("Please login to unfriend one of friends :"+friendID)
						console.log("User not logged in. Cannot  unfriend : "+friendID)
						$location.path('/login');
						}
					
					console.log("---> userID : "+currentUser.id+" sending unfriend request to :"+friendID);
				
					FriendService.unFriend(friendID).then(
							function (d){
								self.Friends = d;
							},
							function(errResponse){
								console.error('Error while fetching all my friends');
							}
					);
				};
				
				self.rejectFriend = function(friendID){
					console.log("->-> rejectFriend(userID) in FriendController.js");
					var currentUser = $rootScope.currentUser;
					console.log("currentUser.id : " + currentUser.id);
					if (typeof currentUser.id == 'undefined')
						{
						alert("Please login to reject one of your friend's request :"+friendID)
						console.log("User not logged in. Cannot  reject Friend : "+friendID)
						$location.path('/login');
						}
					
					console.log("---> userID : "+currentUser.id+" rejecting friend request to :"+friendID);
				
					FriendService.rejectFriend(friendID).then(
							function (d){
								self.Friends = d;
							},
							function(errResponse){
								console.error('Error while fetching all my friends');
							}
					);
				};
				
				self.acceptFriend = function(friendID){
					console.log("->-> acceptFriend(userID) in FriendController.js");
					var currentUser = $rootScope.currentUser;
					console.log("currentUser.id : " + currentUser.id);
					if (typeof currentUser.id == 'undefined')
						{
						alert("Please login to accept one of your friend's request :"+friendID)
						console.log("User not logged in. Cannot  accept Friend : "+friendID)
						$location.path('/login');
						}
					
					console.log("---> userID : "+currentUser.id+" accepting friend request to :"+friendID);
				
					FriendService.acceptFriend(friendID).then(
							function (d){
								self.Friends = d;
							},
							function(errResponse){
								console.error('Error while fetching all my friends');
							}
					);
				};
				
				self.getMyFriendsRequest = function(){
					console.log("->-> getMyFriendsRequest() in FriendController.js");
					var currentUser = $rootScope.currentUser;
					console.log("currentUser.id : " + currentUser.id);
					if (typeof currentUser.id == 'undefined')
						{
						alert("Please login to see all your friend request.")
						console.log("User not logged in. Cannot check myFriendsRequest")
						$location.path('/login');
						}
					
					console.log("---> userID : "+currentUser.id+" checking his/her friends request.");
				
					FriendService.getMyFriendsRequest().then(
							function (d){
								self.Friends = d;
							},
							function(errResponse){
								console.error('Error while fetching all my friends');
							}
					);
				};
				
				self.reset = function(){
					console.log('---> resetting the friend fields');
					self.Friend = {
							id:'', 
							userID : '', 
							friendID : '',
							status : '', 
							isOnline : '',  
							errorCode : '',	
							errorMessage : ''											
					};
					$scope.myForm.$serPristine();// reset Form
				};
				
				
				
				
				
}]);