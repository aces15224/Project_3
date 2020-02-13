// const dotenv = require('dotenv').config()
// require('dotenv').config()

const path = require('path');
const express = require('express');


// const helmet = require('helmet');
// const cors = require('cors');
const session = require('express-session');

const db = require('./models');
const routes = require('./routes');
const passport = require('./config/passport');
// const corsOptions = require('./config/cors.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.set('view-engine', 'ejs')

const users = [];
//passport
app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'bob' })
})

app.get('/login', (req, res) => {
  res.render('login.ejs')
})

app.get('/register', (req, res) => {
  res.render('register.ejs')
})

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(helmet());
app.use(session({ secret: 'TBD', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// app.use(cors(corsOptions));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
}

// Dynamically force schema refresh only for 'test'
// const FORCE_SCHEMA = process.env.NODE_ENV === 'test';

// db.sequelize
//   .authenticate()
//   .then(() => {
//     db.sequelize.sync({ force: FORCE_SCHEMA }).then(() => {
//       console.log(`🌎 ==> API server now on port ${PORT}!`); // eslint-disable-line no-console
//       app.emit('appStarted');
//     });
//   }).catch(console.error); // eslint-disable-line no-console
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

module.exports = app;