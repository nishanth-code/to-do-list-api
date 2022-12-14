var mongoose =require('mongoose');
const { boolean } = require('webidl-conversions');
var todoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:'name cannot be blank!'
    
    },
    completed:{
        type:Boolean,
        default:false

    },
    created_date:{
        type:Date,
        default:Date.now
    }
    
});

var todo = mongoose.model('todo',todoSchema);
module.exports = todo;
console.log('done')
