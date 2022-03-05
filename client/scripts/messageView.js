// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  // further reading: https://css-tricks.com/lodge/learn-jquery/24-templating-underscore/
  // https://2ality.com/2012/06/underscore-templates.html
  render: _.template(`
      <div class="chat">
        <div class="username"><%-username%></div>
        <div class="message-text"><%-text%></div>
        <div class="roomname"><%-roomname%></div>
      </div>
    `)
};

// How _.template works with .render
// MessageView.render({ username: 'test' });