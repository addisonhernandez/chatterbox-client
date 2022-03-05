// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // idea: Store friends in an Object { friend: true/false }

  _data: {},

  // Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  /**
   * Add a friend to our friend list
   * @param {String} friendName
   */
  add(friendName) {
    // before: either not on our list, or on our list and false
    // after: on our list, and true!
    Friends._data[friendName] = true;
  },

  /**
   * Remove a friend from our friend list
   * @param {String} friendName
   */
  remove(friendName) {
    Friends._data[friendName] = false;
  },

  /**
   * @param {String} friendName
   * @returns {Boolean} `true` if `friendName` is our friend, `false` otherwise
   */
  check(friendName) {
    return !!Friends._data[friendName];
  },

  /**
   * Toggles the friend status
   * @param {String} friendName
   */
  toggleStatus(friendName) {
    // Before 1. friendName is on friendslist
    // either friend or not
    // if friend => call remove on friendName
    // if not friend => call add on friendName

    // Before 2. friendName is NOT on friendslist

    // on friends list AND we are friends (true)
    //   if (Friends.check(friendName)) {
    //     Friends.remove(friendName);
    //   } else {
    //     Friends.add(friendsName);
    //   }
    // }
    Friends.check(friendName) ? Friends.remove(friendName) : Friends.add(friendName);
  }
};
