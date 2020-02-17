const router = require('express').Router();
// const apiRoutes = require('./api');

// API Routes
// router.use('/api/v1', apiRoutes);




router.get('/api/tasks', (req, res) => {
  res.json("Results");
});

router.post('/api/tasks', (req, res) => {
  res.send(req.body);
});

module.exports = router;





// router.get('/api/tasks', (req, res) => {
//   db.Task.find({}).then((err, result) => res.json(result))
//     .catch((err) => res.status(422).json(err));

//   // res.json(res.data);
// });

// router.post('/api/tasks', (req, res) => {
//   db.Task.create(req.body).then((err, result) => res.json(result))
//     .catch((err) => res.status(422).json(err));
// });
