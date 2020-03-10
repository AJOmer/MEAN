// const mongoose= require('mongoose'),
// const Quote = mongoose.model('Quote');
const quote = require('../controllers/quotes.js');

module.exports = function(app){
	app.get('/', (request, response)=>{
		quote.index(request, response);
});

app.post('/quotes', (request, response)=>{
	quote.createquote(request, response);
});

app.get('/results', (request, response)=>{
	quote.results(request, response);
})

app.get('/mainpage', (request, response)=>{
	quote.skipquotes(request, response);
});
}