const mongoose = require('mongoose');

const WolfSchema = new mongoose.Schema({
	name: {
		type:String,
		required:[true, "Please Enter a Name for this Wolf"],
		minlength:[2, "Name needs to be longer than 1 character"]
	},
	type: {
		type: String,
		required: [true, "What type of wolf is this?"],
		minlength:[2, "Type length invalid"]
	},
	fur: {
		type: String,
		required: [true, "Description of Wolf's fur?"],
		minlength:[4, "Description of wolf fur"]
	},
	aggression : {
		type: String,
		required: [true, "This Wolf's agression levels?"]}
	}, {timestamps: true});

const Wolf = mongoose.model('Wolf', WolfSchema);
