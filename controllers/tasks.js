const getAllTasks = (req,res) => {
  res.send('all items controller')
}
const createTask = (req,res) => {
    res.json(req.body)
  
  }
  const getTask = (req,res) => {
    res.json({id:req.params.id})
  }
  const updateTask = (req,res) => {
    res.json({id:req.params.id})
  }
  const deleteTask = (req,res) => {
    res.json({id:req.params.id})
  }

module.exports = {getAllTasks,createTask,updateTask,deleteTask,getTask};