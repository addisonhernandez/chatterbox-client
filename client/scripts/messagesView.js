// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // Render all current data stored in Messages._data // ??

    // Attach an event handler for all usernames
    MessagesView.$chats.on('click', '.username', event => MessagesView.handleClick(event));
  },

  // ALL MESSAGES
  render: function (roomname) {
    // TODO: Render _all_ the messages. // NOT DONE ??????
    // TODO: Render only messages for the current room

    // if roomname is 'lobby' => render all the things

    // otherwise: only render messages in `roomname`
    //  define a callback: call renderMessage if message.roomname is roomname

    roomname = roomname || $('#rooms select').val();
    const messageFilter = { filterProp: 'roomname', filterVal: roomname };

    const messages = Messages.retrieve(messageFilter);

    messages.forEach((message) => MessagesView.renderMessage(message));
  },

  // INDIVIDIAL MESSAGE
  renderMessage: function (message) {

    // var $renderedMesssage = $(MessageView.render(message));
    var newMessage = _.template(`
        <div class="message">
        <div class="username"><%-username%></div>
        <div class="github_handle">a.k.a "<%-github_handle%>"</div>
          <div class="message-text"><%-text%></div>
          <div class="roomname"><%-roomname%></div>
        </div>
      `);
    var $newMessage = $(newMessage(message).trim());

    // debugger;
    MessagesView.$chats.append($newMessage);
  },

  handleClick: function (event) {
    // (this should add the sender to the user's friend list).
    Friends.toggleStatus(event.target.innerText);
  }

};