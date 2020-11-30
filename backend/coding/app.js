let mongoose = require('mongoose');
let dotenv = require('dotenv');
let express = require('express');
let app = express();

dotenv.config({ path: './config.env' });

app.use(express.json());

let jokesRouter = require('./routers/jokeRoutes');

app.use('/', jokesRouter);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB connection successful!')
  });

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});