// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // Stores all messages in the form of JS object
  _data: [],

  // input: JS Object
  add(message) {
    Messages._data.push(message);
  },

  // input: object with property we want to filter by
  retrieve(messageFilter) {
    // use _.filter() ?
    // messageFilter:= { filterProp: 'some property, filterVal: 'some val' }
    // ex: { filterProp: "roomname", filterVal: "Eastern Jr"}

    const { filterProp, filterVal } = messageFilter;

    // iterate over _data with _.filter()
    //  return all message objects with property filterProp === filterVal
    return _.filter(Messages._data, (message) => message[filterProp] === filterVal);
  },

  forEach(callback) {
    _.each(Messages._data, (message, index, data) => callback(message, index, data));
  }


  // Resource notes:
  // https://css-tricks.com/lodge/learn-jquery/24-templating-underscore/
};
