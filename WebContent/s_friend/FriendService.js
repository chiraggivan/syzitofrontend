app.factory('FriendService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("JobService...")
	
	var BASE_URL='http://localhost:8083/testbackend'
		
    return {
		
		getMyFriends : function(){
			console.log("--> getMyFriends() function in FriendService.js");
			console.log("--> calling url :"+ BASE_URL+"/getMyFriend/"+jobID);
			return $http.get(BASE_URL +"/getMyFriend/").then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting details of my friend')
					}
			);
		},
		
		sendFriendRequest : function(friendID){
			console.log("--> sendFriendRequest(friendID) function in FriendService.js");
			console.log("--> calling url :"+ BASE_URL+"/addFriend/"+friendID);
			return $http.get(BASE_URL +"/addFriend/"+friendID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while sending friend request');
					}
			);
		},
		
		unFriend : function(friendID){
			console.log("--> unFriend(friendID) function in FriendService.js");
			console.log("--> calling url :"+ BASE_URL+"/unFriend/"+friendID);
			return $http.get(BASE_URL +"/addFriend/"+friendID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while unfriend request');
					}
			);
		},
	
		rejectFriend : function(friendID){
			console.log("--> rejectFriend(friendID) function in FriendService.js");
			console.log("--> calling url :"+ BASE_URL+"/rejectFriend/"+friendID);
			return $http.get(BASE_URL +"/addFriend/"+friendID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while rejecting friend request');
					}
			);
		},
		
		acceptFriend : function(friendID){
			console.log("--> acceptFriend(friendID) function in FriendService.js");
			console.log("--> calling url :"+ BASE_URL+"/acceptFriend/"+friendID);
			return $http.get(BASE_URL +"/acceptFriend/"+friendID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while accepting friend request');
					}
			);
		},
		
		getMyFriendsRequest : function(){
			console.log("--> getMyFriendsRequest() function in FriendService.js");
			console.log("--> calling url :"+ BASE_URL+"/getMyFriendsRequest/");
			return $http.get(BASE_URL +"/getMyFriendsRequest").then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting myFriendRequest');
					}
			);
		}
		
		
		
	}
    
    
    
}]);