// const router = require('express').Router();
// const apiRoutes = require('./api');

// // API Routes
// router.use('/api/v1', apiRoutes);

// module.exports = router;



const router = require('express').Router();
// const apiRoutes = require('./api');

// API Routes
// router.use('/api/v1', apiRoutes);




router.get('/api/tasks', (req, res) => {
  res.send("Hell!");
});

router.post('/api/tasks', (req, res) => {
  res.json(res.data);
});

module.exports = router;