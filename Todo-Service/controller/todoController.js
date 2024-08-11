const Todo = require("../model/todo");
const validator = require("../validator/todoValidator");

exports.createTodo = async (req, res) => {
    try{
        const {error} = validator.todoSchema.validate(req.body);
        if(error){
            return res.status(400).json({message:error.details[0].message});
        }
        const todo = new Todo({
            title:req.body.title,
            description:req.body.description,
            userId:req.user.id
        });
        const savedTodo = await todo.save();
        res.status(201).json({message:"Todo created successfully",data:savedTodo});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.getTodos = async (req, res) => {
    try{
        const todos = await Todo.find({userId:req.user.id});
        res.status(200).json({message:"Todos fetched successfully",data:todos});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const todo = await Todo.findById(id);
        if(!todo){
            return res.status(404).json({message:"Todo not found"});
        }
        if(todo.userId.toString() !== req.user.id){
            return res.status(401).json({message:"Unauthorized"});
        }
        const updatedTodo = await Todo.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({message:"Todo updated successfully",data:updatedTodo});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const todo = await Todo.findById(id);
        if(!todo){
            return res.status(404).json({message:"Todo not found"});
        }
        if(todo.userId.toString() !== req.user.id){
            return res.status(401).json({message:"Unauthorized"});
        }
        await Todo.findByIdAndDelete(id);
        res.status(200).json({message:"Todo deleted successfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}