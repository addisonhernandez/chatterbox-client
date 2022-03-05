// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    // add an event handler to the 'Add Room' button
    RoomsView.$button.on('click', event => RoomsView.handleClick(event));

    // add an event handler to all room options:
    RoomsView.$select.on('click', 'option', event => RoomsView.handleChange(event));

    // TODO: Default to 'Lobby' // ??
    // add Lobby to the rooms data structure and render it
    //Rooms.add('Lobby');
    RoomsView.render();
    RoomsView._selectRoom('Lobby');
  },
  // <body>
  //   <div id="main">
  //     <div id="rooms">
  //       <select>
  //         <option value="lobby">Lobby</option>
  //         <option value=""></>
  //       </select>
  //       <button>Add Room</button>
  //     </div>
  //   </div>
  // </body>

  _selectRoom(roomname) {
    // TODO: Figure out how to select the dropdown
    // RoomsView.$select.find('option[value="' + roomname + '"]').trigger('change');
  },

  // ALL ROOMS
  render: function () {
    // for each roomname (string) in Rooms._data
    // render that data (using renderRoom)
    RoomsView.$select.empty();
    Rooms.forEach(RoomsView.renderRoom);
  },

  // INDIVIDUAL ROOM
  renderRoom: function (roomname) {
    // make a new room <option>

    // newRoom is a function (_.template returns a function), expects an
    //object that has a property of <%-roomname%>
    var newRoom = _.template(`
      <option value="<%-roomname%>"><%-roomname%></option>
    `);
    RoomsView.$select.append($(newRoom({ roomname })));
  },

  // RoomsView.renderRoom('superLobby');
  // expect($('#rooms select').children().length).to.equal(1);

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room.

  },

  handleClick: function (event) {
    // TODO: Handle the user clicking the "Add Room" button.

    // prompt the user for a new roomname
    var newRoom = prompt('Enter a new room name');
    // use Rooms.add() to add a new room,
    Rooms.add(newRoom);
    // then render the rooms
    RoomsView.render();
    // select the new room
    RoomsView._selectRoom(newRoom);
    //RoomsView.$select.find('option[value="<%-newRoom%>"]').trigger('select');
  }

};

// if (!/(&|\?)username=/.test(window.location.search)) {
//   var search = window.location.search;
//   search += 'username=' + (prompt('What is your name?') || 'anonymous');
//   window.location.search = search;
// }
