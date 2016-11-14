$(function() {
  var FADE_TIME = 150;  // ms
  var TYPING_TIMER_LENGTH = 200;  // ms
  var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

  // Initialize variables
  var socket = io.connect();
  var $window = $(window);
  var $boardInput = $('#boardInput');
  var $chat = $('#chat'); // The chatroom page
  var $messages = $('.chat-body'); // Messages area
  var $inputMessage = $('.chat-input'); // Message input box
	var $board = $('.chat-header-center');
	
  var $username = $('.header-right-blank').text();

 	var connected = false;
  var lastTypingTime;
 
  // set initial focus on inputMessage 
  $inputMessage.focus();

	// Sets the client's username
  function startChat() {
		console.log('start chat');
    $chatPage.show();
    socket.emit('add user', $username);
  }


  // Custom string formatter
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, index) {
      return typeof args[index] != undefined ? args[index] : match
    });
  };

  // Log a message
  function log (message, options) {
    var msg = $("<div class='chat-log'>{0}</div>".format(message));
    var $el = $("<div class='chat-item'>{0}</div>".format(msg));
    addMessageElement($el, options);
  }


  // Adds the visual chat message to the message list
  function addChatMessage (data, options) {

		options = options || {};

   // Create a new message element
/*    var $usernameDiv = $('<div class="chat-user">{0}</div>'.format(data.username))
      .css('color', getUsernameColor(data.username));
    var $messageBodyDiv = $('<div class="chat-contents">{0}</div>'.format(data.message));
    // Set css class
    var $messageDiv = $('<li class="chat-item" />')
      .data('username', data.username)
			.append($usernameDiv, $messageBodyDiv);
*/
//
function timeFormatter(){
	var date = new Date(); //without params it defaults to "now"
	var hour;
	var ampm;
	if (date.getHours()>=12){
   	 hour = parseInt(date.getHours()) - 12;
   	 ampm = "오후";
	} else {
   	 hour = date.getHours(); 
   	 ampm = "오전";
	}
	var minute = date.getMinutes();
	if (minute < 10) { minute = "0" + minute; }
	var time = ampm + " "+ hour + ":" + minute;
	return time;
}
var dt = timeFormatter();

var $usernameDiv;

if(data.username === $username.trim()){              
  var $usernameDiv = $('');                            
}else{
  var R = Math.floor(Math.random()*250+50);            
  var G = Math.floor(Math.random()*230+10);            
  var B = Math.floor(Math.random()*230+10);            

  var rgbColor = "rgba(" + R + "," + G + "," + B + ", 0.4)"; 

  console.log(rgbColor);                               

  var $usernameDiv  = $('<div class="chat-avatar"/>');

  console.log($usernameDiv);

  var $spanName = $('<span class="name">{0}</span>'.format(data.username));
  var $iconNinja = $('<i class="icon-ninja-face" style="color:{0}"></i>'.format(rgbColor)); 
  $usernameDiv = $usernameDiv.append($iconNinja);
  $usernameDiv = $usernameDiv.append($spanName);

  console.log($usernameDiv);

}


var $messageTextDiv = $('<div class="msg-text"><p>{0}</p></div>'.format(data.message)).addClass('balloon');

var $messageDateDiv = $('<div class="msg-date"><div class="date">{0}</div></div>'.format(dt));

var $msgDiv = $('<div class="msg"/>').append($messageTextDiv, $messageDateDiv);
var $chatItemDiv;
console.log(data.username);
console.log($username.trim());
if(data.username === $username.trim()){
var $chatItemDiv = $('<div class="chat-item"/>').append($usernameDiv, $msgDiv).addClass('me');
}else{
var $chatItemDiv = $('<div class="chat-item"/>').append($usernameDiv, $msgDiv).addClass('other');
}

//
    // Add message element to message list
    addMessageElement($chatItemDiv, options);
  }


  // Adds a message element to the messages and scrolls to the bottom
  // el - The element to add as a message
  // options.fade - If the element should fade-in (default = true)
  // options.prepend - If the element should prepend
  //   all other messages (default = false)
  function addMessageElement (el, options) {
    var $el = $(el);

    // Setup default options
    if (!options) {
      options = {};
    }
    if (typeof options.fade === 'undefined') {
      options.fade = true;
    }
    if (typeof options.prepend === 'undefined') {
      options.prepend = false;
    }

    // Apply options
    if (options.fade) {
      $el.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
      $messages.prepend($el);
    } else {
      $messages.append($el);
    }
    //$messages[0].scrollTop = $messages[0].scrollHeight;
		//$messages[0].scrollTop = 0;
		 //$messages[0].scrollTop( $messages[0].scrollHeight);
		$messages.scrollTop($messages.prop('scrollHeight'));
  }

  // Whenever the server emits 'login', log the login message
  socket.on('login', function (data) {
    connected = true;
    // Display the welcome message
    var message = "Welcome to Socket.IO Chat – ";
    log(message, {
      prepend: true
    });
    addParticipantsMessage(data);
  });


  function addParticipantsMessage (data) {
    var message = '';
    if (data.activeUsers === 1) {
      message += "there's 1 participant";
    } else {
      message += "there are " + data.activeUsers + " participants";
    }
    log(message);
  }

  // Sends a chat message
  function sendMessage () {
		//temp
		connected = true;

    var message = $inputMessage.val();
    // Prevent markup from being injected into the message
    message = cleanInput(message).trim(); // do not emit blank
    // if there is a non-empty message and a socket connection
    if (message && connected) {
			console.log('here');
			console.log('username'+$username);
      
			// tell server to execute 'new message' and send along one parameter
      socket.emit('new message', message);
    }
    $inputMessage.val('');
    $inputMessage.focus();
    $('.chat-send').removeClass('chat-send-activated');

  }


  // Prevents input from having injected markup
  function cleanInput (input) {
    return $('<div/>').text(input).text();
  }

 

  // Gets the color of a username through our hash function
  function getUsernameColor (username) {
		console.log('username'+username);
    // Compute hash code
    var hash = 7;
    for (var i = 0; i < username.length; i++) {
       hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    var index = Math.abs(hash % COLORS.length);
    return COLORS[index];
  }

  // Keyboard events



  // Click events

	$('.chat-send').click(function() {
		sendMessage();
	});
/*
	$('.chat-send').click(function() {
		var message = $inputMessage.val();
    
		// Prevent markup from being injected into the message
    message = cleanInput(message);
    $inputMessage.focus();
		// if there is a non-empty message and a socket connection
    /*if (message && connected) {
      $inputMessage.val('');
      addChatMessage({
        username: $username,
        message: message
      });*/
  /*  socket.emit('new message', $inputMessage.val());
		console.log($inputMessage.val());
	});
*/
  // Focus input when clicking on the message input's border
//  $inputMessage.click(function () {
//    $inputMessage.focus();
//  });

  // Socket events

  // Whenever the server emits 'new message', update the chat body
  socket.on('new message', function (data) {
		console.log(data);
		console.log('new message');
    addChatMessage(data);
  });

  // Whenever the server emits 'user joined', log it in the chat body
  socket.on('user joined', function (data) {
    log(data.username + ' joined');
    addParticipantsMessage(data);
  });

  // Whenever the server emits 'user left', log it in the chat body
  socket.on('user left', function (data) {
    log(data.username + ' left');
    addParticipantsMessage(data);
    //removeChatTyping(data);
  });

  // Whenever the server emits 'typing', show the typing message
  socket.on('typing', function (data) {
    addChatTyping(data);
  });

  // Whenever the server emits 'stop typing', kill the typing message
  socket.on('stop typing', function (data) {
    removeChatTyping(data);
  });



  socket.on('join success', function(data) {
    console.log(data);
  });
  socket.on('join fail', function(data) {
    console.log(data);
  });


  var messageNum = 0;
/*
  $inputMessage.on('keydown', function(event) {
	console.log("###");
	if(event.which === 13){
		sendMessage();
	}
//	if($inputMessage.val().length) {
//		$('.chat-send').addClass('chat-send-activated');
//	}

  });
*/

function getCaret(el) { 
    if (el.selectionStart) { 
        return el.selectionStart; 
    } else if (document.selection) { 
        el.focus();
        var r = document.selection.createRange(); 
        if (r == null) { 
            return 0;
        }
        var re = el.createTextRange(), rc = re.duplicate();
        re.moveToBookmark(r.getBookmark());
        rc.setEndPoint('EndToStart', re);
        return rc.text.length;
    }  
    return 0; 
}

$('textarea').keydown(function (event) {
    if (event.keyCode == 13) {
        var content = this.value;  
        console.log('this.value=' + content);
				var caret = getCaret(this);
				console.log('caret=' + caret);
          
        if(event.shiftKey){
          this.value = content.substring(0, caret) + "\n" + content.substring(caret, content.length);
	        event.stopPropagation();
       		event.preventDefault();
				  } else {
            this.value = content.substring(0, caret) + content.substring(caret, content.length);
      			sendMessage(); 
			 }
    }
});


});


/*
$(function() {

    // If the username is valid
    if (username) {
      $loginPage.fadeOut();
      $chatPage.show();
      $loginPage.off('click');
      $currentInput = $inputMessage.focus();

      // Tell the server your username
      socket.emit('add user', username);
    }
  }


  // Adds the visual chat message to the message list
  function addChatMessage (data, options) {
    // Don't fade the message in if there is an 'X was typing'
    var $typingMessages = getTypingMessages(data);
    options = options || {};
    if ($typingMessages.length !== 0) {
      options.fade = false;
      $typingMessages.remove();
    }

    var $usernameDiv = $('<span class="username"/>')
      .text(data.username)
      .css('color', getUsernameColor(data.username));
    var $messageBodyDiv = $('<span class="messageBody">')
      .text(data.message);

    var typingClass = data.typing ? 'typing' : '';
    var $messageDiv = $('<li class="message"/>')
      .data('username', data.username)
      .addClass(typingClass)
      .append($usernameDiv, $messageBodyDiv);

    addMessageElement($messageDiv, options);
  }

  // Adds the visual chat typing message
  function addChatTyping (data) {
    data.typing = true;
    data.message = 'is typing';
    addChatMessage(data);
  }

  // Removes the visual chat typing message
  function removeChatTyping (data) {
    getTypingMessages(data).fadeOut(function () {
      $(this).remove();
    });
  }

  // Adds a message element to the messages and scrolls to the bottom
  // el - The element to add as a message
  // options.fade - If the element should fade-in (default = true)
  // options.prepend - If the element should prepend
  //   all other messages (default = false)
  function addMessageElement (el, options) {
    var $el = $(el);

    // Setup default options
    if (!options) {
      options = {};
    }
    if (typeof options.fade === 'undefined') {
      options.fade = true;
    }
    if (typeof options.prepend === 'undefined') {
      options.prepend = false;
    }

    // Apply options
    if (options.fade) {
      $el.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
      $messages.prepend($el);
    } else {
      $messages.append($el);
    }
    $messages[0].scrollTop = $messages[0].scrollHeight;
  }

  // Prevents input from having injected markup
  function cleanInput (input) {
    return $('<div/>').text(input).text();
  }

  // Updates the typing event
  function updateTyping () {
    if (connected) {
      if (!typing) {
        typing = true;
        socket.emit('typing');
      }
      lastTypingTime = (new Date()).getTime();

      setTimeout(function () {
        var typingTimer = (new Date()).getTime();
        var timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
          socket.emit('stop typing');
          typing = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  }

  // Gets the 'X is typing' messages of a user
  function getTypingMessages (data) {
    return $('.typing.message').filter(function (i) {
      return $(this).data('username') === data.username;
    });
  }

  // Gets the color of a username through our hash function
  function getUsernameColor (username) {
    // Compute hash code
    var hash = 7;
    for (var i = 0; i < username.length; i++) {
       hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    var index = Math.abs(hash % COLORS.length);
    return COLORS[index];
  }

  // Keyboard events

  $window.keydown(function (event) {
    // Auto-focus the current input when a key is typed
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      $currentInput.focus();
    }
    // When the client hits ENTER on their keyboard
    if (event.which === 13) {
      if (username) {
        sendMessage();
        socket.emit('stop typing');
        typing = false;
      } else {
        setUsername();
      }
    }
  });

  $inputMessage.on('input', function() {
    updateTyping();
  });

  // Click events

  // Focus input when clicking anywhere on login page
  $loginPage.click(function () {
    $currentInput.focus();
  });

  // Focus input when clicking on the message input's border
  $inputMessage.click(function () {
    $inputMessage.focus();
  });

  // Socket events

  // Whenever the server emits 'login', log the login message
  socket.on('login', function (data) {
    connected = true;
    // Display the welcome message
    var message = "Welcome to Socket.IO Chat – ";
    log(message, {
      prepend: true
    });
    addParticipantsMessage(data);
  });

  // Whenever the server emits 'new message', update the chat body
  socket.on('new message', function (data) {
    addChatMessage(data);
  });

  // Whenever the server emits 'user joined', log it in the chat body
  socket.on('user joined', function (data) {
    log(data.username + ' joined');
    addParticipantsMessage(data);
  });

  // Whenever the server emits 'user left', log it in the chat body
  socket.on('user left', function (data) {
    log(data.username + ' left');
    addParticipantsMessage(data);
    removeChatTyping(data);
  });

  // Whenever the server emits 'typing', show the typing message
  socket.on('typing', function (data) {
    addChatTyping(data);
  });

  // Whenever the server emits 'stop typing', kill the typing message
  socket.on('stop typing', function (data) {
    removeChatTyping(data);
  });
});
*/
