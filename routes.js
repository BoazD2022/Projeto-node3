const express = require('express')

const tasksController = require('./controllers/TasksControllers')


const router = express.Router()



router.post('/', tasksController.createTasks)


router.get('/', tasksController.allTasks)

router.get('/:id', tasksController.Tasks)



router.put('/:id', tasksController.updateTasks)


router.delete('/:id', tasksController.deleteTasks)



module.exports = router