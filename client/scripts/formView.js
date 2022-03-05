// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // collect message data into an object
    // - username : App.username
    // - roomname : $('#rooms select').val()
    // - text     : $('#message').val()
    const newMessage = {
      username: App.username,
      roomname: $('#rooms select').val(),
      text: $('#message').val()
    };

    // use the Parse API to send {message}
    // Parse.create function signature:
    // function (message, successCB, errorCB = null) {}
    Parse.create(newMessage, data => MessagesView.renderMessage(...data));
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};