const getAllTasks = (req, res) => {
    res.send('all items')
}

const createTasks = (req, res) => {
    res.json(req.body)
}

const updateTasks = (req, res) => {
    res.send('update tasks')
}

const deleteTasks = (req, res) => {
    res.send('delete single tasks')
}

const getTasks = (req, res) => {
    res.json({id:req.params.id})
}


module.exports = {
    getAllTasks,
    getTasks,
    updateTasks,
    createTasks,
    deleteTasks
}