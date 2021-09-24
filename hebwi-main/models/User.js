const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
         type: String,
         required: true
    },
    password: {
        type: String,
        required: true
    }, 
    Team :{
        type :Object
    }

});
module.exports =  mongoose.model("user", UserSchema);