// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // Render all current data stored in Messages._data // ??
  },

  render: function () {
    // TODO: Render _all_ the messages. // NOT DONE ??????
    _.template(`
      <div class="message">
        <div class="username"><%-username%></div>
        <div class="message-text"><%-text%></div>
        <div class="roomname"><%-roomname%></div>
      </div>
    `);
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    var $renderedMesssage = $(MessageView.render(message));

    MessagesView.$chats.append($renderedMesssage);
  },

  // MessagesView.renderMessage(message);
  // expect($('#chats').children().length).to.equal(1);

  //   <!--
  //   <div class="chat">
  //     <div class="username"></div>
  //     <div></div>
  //   </div>
  //   -->
  // `)

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};