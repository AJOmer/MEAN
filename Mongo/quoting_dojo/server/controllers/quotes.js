const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Dojo', {useNewUrlParser: true});
require('../config/mongoose.js');
const Quote = mongoose.model('Quote');


module.exports = {
	index: function(request, response){
		response.render('index', {title: 'Quote Form'})
	},
	createquote: function(request, response){
	const quote = new Quote({
	name: request.body.name,
	quote: request.body.quote});
	quote.save(function(error){
		if(error) {
			for(var key in error.errors){
				console.log(key);
				request.flash(key, error.errors[key].message);
			}
			response.redirect('/')
		}
		else {
			response.redirect('/results')
		}
	})
	},
	results: function(request, response){
	Quote.find({}, (error, quotes)=>{
		if(error) {
			console.log("wronggggg");
		}
		else {
			response.render('results', {info: quotes});
		}
	})
	},
	skipquotes: function(request, response){
		console.log("WORKING????");
		response.redirect('/results');
	}
}