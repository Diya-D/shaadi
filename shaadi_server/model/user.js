const mongoose=require('mongoose')
const User=mongoose.model('User',{
    username:String,
    password:String,
    relation:String,
    gender:String,
    
})
module.exports={
    User
}