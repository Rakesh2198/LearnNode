const express = require('express');
const router = express.Router();
const getUserData = require('../controllers/userController');
const { postTodo, updateTodo, deleteTodo, getTodo } = require('../controllers/todoControllers');

router.post('/posttodo/:todo', postTodo)
router.put('/updatetodo/:id/:updatedtodo', updateTodo)
router.delete('/deletetodo/:id', deleteTodo)
router.get('/gettodo', getTodo)

module.exports = router;