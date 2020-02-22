const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt')
const passport = require('./config/passport');

const PORT = process.env.PORT || 3001;
const app = express();

// app.set('view-engine', 'ejs')
// app.use(express.urlencoded({ extended: false }))
// const users = [];

// //passport
// app.get('/', (req, res) => {
//   res.render('index.ejs', { name: 'bob' })
// })

// app.get('/login', (req, res) => {
//   res.render('login.ejs')
// })
// app.post('/login', (req, res) => {
  
// })

// app.get('/register', (req, res) => {
//   res.render('register.ejs')
// })

// app.post('/register', async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     users.push({
//       id: Date.now().toString(),
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPassword
//     })
//     res.redirect('/login')
//   } catch {
//     res.redirect('/register')
//   }
//   console.log(users)
// })
// Define middleware here
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

 
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

require('./routes')(app);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
}


app.listen(PORT, function() {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT
  );
});
