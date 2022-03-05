// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function () {
    // TODO: Render _all_ the messages.
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    var $renderedMesssage = $(MessageView.render(message));

    MessagesView.$chats.append($renderedMesssage);
  },

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