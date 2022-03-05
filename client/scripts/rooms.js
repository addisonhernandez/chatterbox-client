// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // Define how you want to store the list of rooms
  _data: [],

  // Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  //add:
  add(roomname) {
    Rooms._data.push(roomname);
  },

  //update: ????

  //foreach: (takes callback function)
  //  iterate over data
  //   callback function on each piece of data
  // short hand version of forEach: function() { do something }
  forEach(callback) {
    _.each(Rooms._data, (room, index, data) => callback(room, index, data));
  }

};
