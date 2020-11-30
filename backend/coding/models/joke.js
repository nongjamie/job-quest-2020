let mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: [true, 'A joke must have a joke'],
    unique: true
  },
  like: {
    type: Number,
    default: 0
  },
  dislike: {
    type: Number,
    default: 0
  }
});

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;