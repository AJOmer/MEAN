const wolves = require('../controller/wolves.js');

module.exports = function(app){
app.get('/', (request, response)=>{
	wolves.index(request, response);
});

app.get('/new', (request, response)=>{
	wolves.wolfform(request, response);
});

app.post('/wolves', (request, response)=>{
	wolves.newwolf(request, response);
});

app.get('/wolves/:name', (request, response)=>{
	wolves.wolfdetail(request, response);
});

app.post('/destroy/:name', (request, response)=>{
	wolves.destroywolf(request, response);
});

app.get('/edit/:name', (request, response)=>{
	wolves.editwolf(request, response);
});

app.post('/change/:name', (request, response)=>{
	wolves.updatewolf(request, response);
});

}