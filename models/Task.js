const mongoose = require('mongoose')

// Using Schema we can set up all the structure for all the documents 
// that eventually we will have in our collection

// Learn more about validation: https://mongoosejs.com/docs/validation.html
const TaskSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, 'Must Provide Name'], 
        trim: true, 
        maxlength:[20, 'Name can not be more than 20 characters']
    }, 
    completed:{
        type: Boolean, 
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)