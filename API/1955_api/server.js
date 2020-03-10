const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/1955', {useNewUrlParser: true});


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


const PeopleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "INVALID"]}
	}, {timestamps: true});

const People=mongoose.model('People', PeopleSchema)

app.get('/', (request, response)=>{
	People.find({}, (error, people)=>{
		if(error){
			console.log("THERE IS AN ERROR");
			response.json(error);
		}
		else{
			response.json(people);
		}
	})
}),

app.get('/new/:name/', (request, response)=>{
	// const person = new People({
	// 	name: request.params.name
	// });
	People.create({name:request.params.name}, (error, person)=>{
		if(error){
			console.log("ERROR");
			response.json(error);
		}
		else{
			console.log("SUCCESS");
			console.log(People);
			response.json(person);
		}
	})
})

app.get('/remove/:name/', (request, response)=>{
	People.remove({name: request.params.name}, function(error, person){
		if(error){
			response.json(error)
		}
		else{
			response.json({removed: true});
		}
	})
}),


app.get('/:name', (request, response)=>{
	People.findOne({name: request.params.name}, function(error, person){
		if(error){
			response.json(error);
		}
		else{
			response.json(person);
		}
	})	
})



app.listen(5000, ()=>console.log("STARTING UP, LISTENING ON PORT 5000"));