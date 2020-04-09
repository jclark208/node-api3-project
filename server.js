const express = require('express');
const helmet = require('helmet');
const server = express();

const postsRouter = require('./posts/postRouter.js');
const userRouter = require('./users/userRouter.js');


// server.get('/', (req, res) => {
//   res.send(`<h2>Let's write some middleware!</h2>`);
// });
server.use(express.json());
server.use(helmet());



server.use('/api/users', logger, userRouter);
server.use('/api/posts', postsRouter);


//custom middleware

function logger(req, res, next) {
    console.log(
    `[${new Date().toISOString()}] ${req.method} Request to ${req.originalUrl}`
  );
  next();
}


function greeter(req, res, next) {
  req.cohort = 'Web 28';
  next();
}

module.exports = server;
