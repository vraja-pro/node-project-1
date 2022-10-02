const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

//middleware

app.use(express.json())

// routes
app.get('/hello', (req,res)=>{
    res.send('Hi!')
})

// get all the tasks apis
app.use('/api/v1/tasks', tasks)


const port = 3000

app.listen(port, console.log(`Server listening on port ${port}`))
