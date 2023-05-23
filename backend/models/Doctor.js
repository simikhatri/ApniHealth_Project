const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    Name: {
        type: String,
        required: true
    },
    Qualification: {
        type: String,
        required: true
        },
    InstituteName: {
        type: String,
        required: true
    },
    YearOfPassing: {
        type: String,
        required: true
    },
    Specialization:{
        type: String,
        required: true
    },
    Hospital_Clanic: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    }
})
const Doctor = mongoose.model("Doctors", doctorSchema);
module.exports = Doctor;