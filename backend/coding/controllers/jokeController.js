let Joke = require('./../models/joke');

exports.getAllJokes = async (req, res) => {
  try {
    let jokes = await Joke.find();
    res.status(200).json({
      status: 'success',
      data: jokes
    });
  } catch(err) {
    res.status(403).json({
      status: 'fail',
      err: err
    });
  }

}

exports.createNewJoke = (req, res) => {
  let newJoke = new Joke({
    joke: req.body.joke
  });
  newJoke
    .save()
    .then(doc => {
      res.status(200).json({
        status: 'success',
        data: doc
      });
    })
    .catch(err => {
      res.status(403).json({
        status: 'fail',
        err: err
      });
    });
}

exports.getJokeById = async (req, res) => {
  let jokeId = req.params.id;
  try {
    let joke = await Joke.findById(jokeId);
    res.status(200).json({
      status: 'success',
      data: joke
    });
  } catch(err) {
    res.status(403).json({
      status: 'fail',
      err: err
    });
  }
}

exports.deleteJokeById = async (req, res) => {
  let jokeId = req.params.id;
  try {
    let joke = await Joke.findByIdAndDelete(jokeId);
    res.status(204).json({
      status: 'success'
    });
  } catch(err) {
    res.status(403).json({
      status: 'fail',
      err: err
    });
  }
  res.status(200).json({
    status: 'delete joke'
  });
}

exports.likeJokeById = async (req, res) => {
  let jokeId = req.params.id;
  try {
    let joke = await Joke.findById(jokeId);
    joke.like = joke.like + 1;
    joke.save();
    res.status(200).json({
      status: 'success',
      data: joke
    });
  } catch(err) {
    res.status(403).json({
      status: 'fail',
      err: err
    });
  }
}

exports.dislikeJokeById = async (req, res) => {
  let jokeId = req.params.id;
  try {
    let joke = await Joke.findById(jokeId);
    joke.dislike = joke.dislike + 1;
    joke.save();
    res.status(200).json({
      status: 'success',
      data: joke
    });
  } catch(err) {
    res.status(403).json({
      status: 'fail',
      err: err
    });
  }
}