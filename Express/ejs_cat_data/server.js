const express = require("express");
const app = express();
app.listen(3000, () => console.log("listening on port 3000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (request, response) =>{
	response.send("Hello Express");
});
app.get('/cats', (request, response) =>{
	response.render('cats');
});
app.get('/garfield', (request, response) => {
	var details = {
		name: "Garfield",
		favorite_food: "Lasagna",
		Age: "5",
		picture: "cat1.jpeg",
		sleeping_spots: ["on the couch", "on the bed", "in the sunroom"]
	}
	response.render('details', {cats: details});
});
app.get('/sylvester', (request, response) =>{
	var details = {
		name: "Sylvester",
		favorite_food: "Birds",
		Age: "11",
		picture: "cat2.jpeg",
		sleeping_spots: ["anywhere", "on the bed", "in the sunroom"]
	}
	response.render('details', {cats: details});
});
app.get('/kitty', (request, response)=>{
	var details = {
		name: "Kitty",
		favorite_food: "meowmix",
		Age: "5",
		picture: "cat3.jpeg",
		sleeping_spots: ["anywhere", "top of tv", "shower"]
	}
	response.render('details', {cats: details});
});