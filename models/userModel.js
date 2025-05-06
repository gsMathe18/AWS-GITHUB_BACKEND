const mongoose = require("mongoose");
const { required } = require("yargs");
const { Schema } = mongoose;

const UserScheme = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password: {
        type: String,
    },
    repositories:[
    {
        default:[],
        type: Schema.Types.ObjectId,
        ref:"Repository",
    },
  ],
    followedUsers: [
    {
        default:[],
        type: Schema.Types.ObjectId,
        ref:"User",
    },
  ],
    starRepos: [
    {
        default:[],
        type: Schema.Types.ObjectId,
        ref:"Repository",
    },
  ],

});

const User = mongoose.model("User", UserScheme);
module.exports =  User;