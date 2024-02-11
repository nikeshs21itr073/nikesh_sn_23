
const mongoose=require("mongoose");
const m=new mongoose.Schema({
    umail:{
        type:String,
        requried:true
    },
    uname:{
        type:String,
        requried:true
    },
    phone:{
        type:String,
        requried:true
    },
    upassword:{
        type:String,
        requried:true
    },
    
});
module.exports=mongoose.model("users",m);