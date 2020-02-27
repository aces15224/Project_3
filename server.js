const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const passport = require('./config/passport');

const PORT = process.env.PORT || 3001;
const app = express();

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const db = require("./models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password1@ds225375.mlab.com:25375/heroku_5b0wf0xm";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


// //passport
// app.get('/', (req, res) => {
//   res.render('index.ejs', { name: 'bob' })
// })

// app.get('/login', (req, res) => {
//   res.render('login.ejs')
// })


// LocalStrategy = require('passport-local').Strategy;
// passport.use(new LocalStrategy(
// function(username, password, done) {

//   console.log("my username is" + username)
//   db.User.findOne({ username: username }, function(err, user) {
//     if (err) { return done(err); }
//     if (!user) {
//       return done(null, false, { message: 'Incorrect username.' });
//     }
//     if (!user.validPassword(password)) {
//       return done(null, false, { message: 'Incorrect password.' });
//     }
//     return done(null, user);
//   });
// }
// ));


app.get('/api/login', function(req, res){


  console.log(req.query);

  db.User.findOne({ email: req.query.username }, function(err, user) {
    if (err) {res.json("error") }

    if(user){console.log(user)}
    if (!user) {
      res.json("no user")

    //  return done(null, false, { message: 'Incorrect username.' });
    }
      if (req.query.password == user.password) {
       
        res.json(user)
    //    return done(null, false, { message: 'Incorrect password.' });
      
    }else{
      res.json({"error": "incorrect password"})
    }
  });

});


app.get('/api/register', function(req,res){

  //db.User.create()
  console.log(req.query)

  //create a user here 
  db.User.create(req.query)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
})

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
