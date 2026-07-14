const express = require('express')
const redis = require('../redis')

const router = express.Router()

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits,
  })
})

/* GET statistics */
router.get('/statistics', async (req, res) => {
  //console.log('statistics endpoit erreicht')
  const added_todos_str = await redis.get('todoCount')
  //console.log('added_todos', added_todos)
  //console.log('typeof added_todos', typeof added_todos)
  const added_todos = Number(added_todos_str)
  res.send({
    added_todos: Number.isNaN(added_todos) ? 0 : added_todos,
  })
})

module.exports = router
