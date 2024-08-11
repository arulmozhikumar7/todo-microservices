const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"
    },
    userId:{
        type:String,
        required:true
    }
});

const Todo = mongoose.model("Todo",todoSchema);
module.exports = Todo;