const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
// app.use(express.static('./public'))
app.use(express.json())

// routes

app.use('/api/v1/tasks', tasks)


// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

const port = 3000

// Since connectDB() returns a promise we can use async()
// The async function helps to write promise-based code asynchronously via the event-loop. 
// Async functions will always return a value. 
// Await function can be used inside the asynchronous function to wait for the promise. 
// This forces the code to wait until the promise returns a result.

// Keep your secret variable using process.env.NameOfVariable using the dotenv dependency

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        // Will only start the server when the database is connected
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()