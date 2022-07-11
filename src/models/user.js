// Modelo para los usuarios

const mongoose=require("mongoose");

const Schema=mongoose.Schema;


const UserSchema=new Schema({

    username: {
        type:String,
        required:true,
        unique:true},

    password:{type:String,
        required:true}

})

UserSchema.pre("save", function(next){
    if (condition) {
        
    }
})