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

    // Make this function actually send a message to the Parse API.

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
    Parse.create(newMessage, () => console.log('Hey, submit worked!'));
  },

  //   <div id="main">
  //     <form action="#" id="send" method="post">
  //       <input type="text" name="message" id="message">
  //       <input type="submit" name="submit" class="submit" disabled="disabled">
  //     </form>
  //   </div>

  // $('#message').val('Why so many Mel Brooks quotes?');
  // $('form .submit').trigger('submit');
  // expect(Parse.create.called).to.be.true;
  // Parse.create.restore();

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};