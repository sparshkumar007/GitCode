const mongoose=require('mongoose');
const { Schema }=mongoose;

const problemSchema=new Schema({
    P_code: {
        type: String,
        required: true
    },
    P_title: {
        type: String,
        required: true
    },
    Statement: {
        type: String,
        required: true
    },
    Tag: {
        type: String,
        required: true
    },
    Test_cases: {
        type: String,
        required: true
    }, //for now taking string to test adding problem to database
    Hidden_Test_cases: {
        type: String,
        required: true
    },
    Total_Submissions: {
        type: Number,
        default: 0
    },
    Correct_Submissions: {
        type: Number,
        default: 0
    },
    Accuracy: {
        type: Number,
        default: 0
    },
    Is_official: {
        type: Boolean,
        required: true,
        default: false
    },
    Author: {
        type: String,
        required: true,
    }
});

module.exports=mongoose.model('problem',problemSchema);