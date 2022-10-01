const express = require('express');
const app = express();

// routes
app.get('/hello', (req,res)=>{
    res.send('Hi!')
})

// get all the tasks
app.get('/api/v1/tasks')

const port = 3000

app.listen(port, console.log(`Server listening on port ${port}`))
