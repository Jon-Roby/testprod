const express = require('express');
const path = require('path');
const fallback = require('express-history-api-fallback');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, '/index.html');

// var authRouter = require('./server/routers/auth_router');
// var movieRouter = require('./server/routers/movie_router');
// var userRouter = require('./server/routers/user_router');

// if (isProduction) {
//   // var bundle = require('./server/bundle.js');
//   // bundle();
//
// }

// app.use(express.static(publicPath));
// var mongo = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/auth'
// mongoose.connect(mongo);

app.use(cors());
app.use(bodyParser.json());

// app.use(express.static(path.resolve(__dirname, 'landing')));

// app.use('/api/auth', authRouter);
// app.use('/api/users', userRouter);
// app.use('/api/movies', movieRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(fallback('index.html', { root: publicPath }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
