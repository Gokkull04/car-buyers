const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        username:String,
        password:String,
    },
    {
        collection:"userdata",
    }
);

mongoose.model("userdata",user);