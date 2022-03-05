// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // Default to 'Lobby' // ??
  },

  // foreach signature: Rooms.forEach(callback) {
  render: function () {
    // TODO: Render out the list of all rooms.   // Rooms._data
    // for each roomname (string) in Rooms._data
    Rooms.forEach(RoomsView.renderRoom);
    // render that data (using renderRoom)
  },

  renderRoom: function (roomname) {
    // make a new room <option>
    // var $renderedRoom = $(RoomsView.render(roomname)); // ??

    // newRoom is a function (_.template returns a function), expects an
    //object that has a property of <%-roomname%>
    var newRoom = _.template(`
      <option value="<%-roomname%>"><%-roomname%></option>
    `);

    RoomsView.$select.append($(newRoom({ roomname })));
  },

  //   _.template(`
  //   <select>
  //     <div class="username"><%-username%></div>
  //     <div class="message-text"><%-text%></div>
  //     <div class="roomname"><%-roomname%></div>
  //   </div>
  // `);

  // RoomsView.renderRoom('superLobby');
  // expect($('#rooms select').children().length).to.equal(1);

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function (event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
