let express = require('express');
let jokeController = require('./../controllers/jokeController');
let router = express.Router();

router.get('/', jokeController.getAllJokes);
router.get('/:id', jokeController.getJokeById);

router.post('/', jokeController.createNewJoke);
router.post('/:id/like', jokeController.likeJokeById);
router.post('/:id/dislike', jokeController.dislikeJokeById);

router.delete('/:id', jokeController.deleteJokeById);

module.exports = router;