app.controller("ChatForumController", function ($scope, ChatForumService){
	console.log('ChatForumController.js started')
	$scope.messages = [];
	$scope.message = ""
	$scope.max = 500;
	
	$scope.addMessage = function(){
		console.log("addMessage function started from ChatForumController.js ")
		ChatForumService.send($scope.message);
		$scope.message ="";
	};
	
	ChatForumService.receive().then(null, null, function(message){
		console.log("receive started from ChatForumController.js ")
		$scope.messages.push(message); //  message we have to display in html
	});
});