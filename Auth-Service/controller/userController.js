const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.createUser = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email||!password) {
            return res.status(400).send('All fields are required')
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).send('User already exists')
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            email,
            password: hashedPassword
        })
        await user.save()
        if(user){
            return res.status(200).send('User created successfully')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.loginUser = async (req,res)=>{
    const {email,password} = req.body
    try{
        if(!email||!password){
            res.status(400).send('All fields are required')
        }
        const user = await User.findOne({email})    
        if(!user){
            return res.status(400).send('User does not exist')
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).send('Invalid credentials')
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        res.status(200).json({
            _id:user._id,
            email:user.email,
            token:token
        })
    }
    catch(err){
        res.status(500).send(err.message)
    }
}