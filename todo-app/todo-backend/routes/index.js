const express = require('express');
const redis = require('../redis');


const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics */
router.get('/statistics', async (req, res) => {
  console.log('statistics endpoit erreicht')
  const added_todos = await redis.get('todoCount')
  console.log('added_todos',added_todos)
  res.send({"added_todos": added_todos === null || added_todos.length === 0 ? '0' : added_todos});
});

module.exports = router;
