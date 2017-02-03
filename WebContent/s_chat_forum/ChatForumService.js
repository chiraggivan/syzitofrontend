app.service("ChatForumSerivce", function($q, $timeout){
	console.log('ChatForumSerice.js started')
	var service ={}
	var listener = $q.defer()
	var socket = {
		client : null,
		stomp : null
	}
	var messageIds = [];
	
	service.RECONNECT_TIMEOUT = 10000;
	service.SOCKET_URL="/syzitobackend/chat_forum";
	service.CHAT_TOPIC = "/topic/message";
	service.CHAT_BROKER="/app/chat_forum";
	
	service.receive = function(){
		console.log("receive function in chatForumService started")
		return listener.promise;
	};
	
	service.send = function(message){
		console.log("send function in chatForumService started")
		var id = Math.floor(Math.random()*10000);
		
		socket.stomp.send(service.CHAT_BROKER,{     // send(destination, {}, body);
			priority:9
		}, JSON.stringnify({
			message:message,
			id:id
		}));
		
		messageIds.push(id);
	};
	
	initialize();  // to call first time explicitly
	
	var initialize = function(){
		console.log("initialize function in chatForumService started")
		socket.client = new SockJS(service.SOCKET_URL);
		socket.stomp = Stomp.over(socket.client);
		socket.stomp.connect({}, startListener);  /// connect(headers,connectCallback, errorCallback);
		socket.stomp.onclose = reconnect;
	};
	
	var startListener = function(){
		console.log("startListener function in chatForumService started")
		socket.stomp.subscribe(service.CHAT_TOPIC, function(data){  // subscribe(destinatino, callback, {id: mysubid});
			listener.notify(getMessage(data.body));
		});
	};
	
	var getMessage = function(data){
		console.log("getMessage function in chatForumService started")
		var message = JSON.parse(data);
		var out = {};
		out.message = message.message;
		out.time = new Date(message.time);
		
		return out;
	};
	
	var reconnect = function(){
		console.log("reconnect function in chatForumService started")
		$timeout(function(){       	// wrapper window.setTimeout:: $timeout ([fn],[delay],[invokeApply],[Pass]);
			initialize();			//invokeApply true or false : false-> skip dirty checking
		}, this.RECONNECT_TIMEOUT);	// Pass - additional parameters inf any
	};
		
	
	return service;
});