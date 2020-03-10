const mongoose = require('mongoose');


const QuoteSchema = new mongoose.Schema({
	name: {
		type:String, 
		required: [true, "Please Enter Name"],
		minlength: [2, "Your name is not just one letter, be real"]
	},
	quote: {type:String, required: [true, "Inspire me!"]}
}, {timestamps: true});

const Quote = mongoose.model('Quote', QuoteSchema);
