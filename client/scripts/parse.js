// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

// Used to get to / from Parse API ?
// Parse.create()
var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  // RESTful POST to server, http verb = post, server is the URL noun (line 8)
  // client -> server -> client
  create: function (message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  // data {} has the form:
  // {
  //   "roomname": "Eastern Jrs",           // from `rooms.js`
  //   "text": "Or is it?",                 // from `formView.js`
  //   "username": "Dalton%20%F0%9F%92%80", // from `App.username`
  // },

  // RESTful GET from server, http verb = get, server is the URL noun (line 10)
  // client -> server -> client
  readAll: function (successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};