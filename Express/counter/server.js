const express = require("express");
const app = express();
console.log("testing");
app.listen(5000, () => console.log("listening on port 3000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const session = require("express-session");
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'yaboi',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get('/', (request, response) =>{
	if(request.session.counter == null){
		request.session.counter = 1;
	}
	else{
		request.session.counter += 1;
	}
	response.render('counter', {counter : request.session.counter});
})
app.get('/reset', (request, response)=>{
	if( request.session.counter != null){
		request.session.counter = null;
	}
	response.redirect('/');
});
app.get('/plus', (request, response)=>{
	if( request.session.counter != null){
		request.session.counter +=1;
	}
	response.redirect('/');
});