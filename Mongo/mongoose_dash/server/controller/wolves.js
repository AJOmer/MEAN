const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WolfDash', {useNewUrlParser: true});
require('../config/mongoose.js');
const Wolf = mongoose.model('Wolf');

module.exports = {
index: 	function(request, response){
Wolf.find({}, (error, wolves)=>{
	if(error) {
		console.log("WRONG");
	}
	else {
		response.render('index', {info: wolves});
	}
})
},
wolfform: function(request, response){
	response.render('form', {title: 'Wolf Form'})
},
newwolf: function(request, response){
	const wolf = new Wolf ({
		name: request.body.name,
		type: request.body.type,
		fur: request.body.fur,
		aggression: request.body.aggression});
		wolf.save(function(error){
			if(error){
				for(var key in error.errors){
					request.flash(key, error.errors[key].message);
				}
				response.redirect('/new');
			}
			else {
				response.redirect('/');
			}
		
		})
},
wolfdetail: function(request, response){
	 Wolf.findOne({name: request.params.name}, (error, wolf_detail)=>{
		console.log(request.params);
		console.log(wolf_detail);
		if(error){
			console.log(error);
			response.redirect('/' + request.params.name);
		}
		else { 
			response.render('wolfinfo', {wolf: wolf_detail});
		}
	})
},
destroywolf: function(request, response){
	Wolf.deleteOne({name: request.params.name}, (error, deleted)=>{
		if(error){
			console.log(request.params);
			response.redirect('/');
		}
		else {
			console.log("DELETED");
			response.redirect('/');
		}
	});
},
editwolf: function(request, response){
	Wolf.findOne({name: request.params.name},(error, editing)=>{
		if(error) {
			console.log("WRONG");
		}
		else {
			response.render('edit', {wolf: editing});
		}
	});
},
updatewolf: function(request, response){
	Wolf.updateOne({name: request.params.name},{name: request.body.name, type: request.body.type, fur: request.body.fur, aggression: request.body.aggression}, (error, data)=>{
		if(error){
			response.redirect('/'+ request.params.name);
		}
		else {
			response.redirect('/');
		}
	});
},
}
