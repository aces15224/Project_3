
const router = require('express').Router();
const db = require('../models');

router.get('/api/tasks', (req, res) => {
  res.json(res.data);
});

router.post('/api/tasks', (req, res) => {
  db.Task.create(req.body).then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});


module.exports = router;
