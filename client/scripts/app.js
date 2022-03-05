// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  // get fist IMG descendent of CSS class 'spinner' (which is the spiffygif.gif)
  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    // string of name inputed to pop up
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // continuously update the feed
    setInterval(App.fetch, 5000);

  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // for each message in data:
      // insert message data into -> messages & rooms
      data.forEach(message => {
        Messages.add(message);
        RoomsView.render();
        Rooms.add(message.roomname);
        MessagesView.render();
      });

      // invoke the callback function
      callback();
    });
  },

  // makes submit button diabled, spinning gif appears
  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  // makes submit button enabled, spinning gif disappears
  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
