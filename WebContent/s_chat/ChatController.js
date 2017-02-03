app.controller("ChatController", function ($scope, ChatService){
	console.log('ChatController.js started')
	$scope.messages = [];
	$scope.message = ""
	$scope.max = 500;
	
	$scope.addMessage = function(){
		console.log("addMessage function started from ChatController.js ")
		ChatService.send($scope.message, $scope.friendID);
		$scope.message ="";
	};
	
	ChatService.receive().then(null, null, function(message){
		console.log("receive started from ChatController.js ")
		$scope.messages.push(message); //  message we have to display in html
	});
});