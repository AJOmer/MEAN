const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const session = require("express-session");
const flash = require('express-flash');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const path = require('path');


app.use(flash());
app.use(session({
    secret: "loginregistration",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
app.listen(5000, () => console.log("listening on port 5000"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('trust proxy', 1);

///database\\\

mongoose.connect('mongodb://localhost/login_registration', {useNewUrlParser: true});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	first_name: {
		type:String,
		required: [true, "first name required"],
		validate:{
			validator: function(value){
				return /^[A-z]+$/.test(value)
			},
			message: "Enter a valid first name"
		}
	},
	last_name: {
		type: String,
		required: [true, "last name required"],
		validate: {
			validator: function(value){
				return /^[A-z]+$/.test(value)
			},
			message: "Enter a valid last name"
		}
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		validate: {
			validator: function(value){
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
			},
			message: "Enter valid email"
		}
	},
	birthday: {
		type: Date,
		required: [true, "Birthdate is required"],
		validate: {
			validator: function(value){
				return value instanceof Date;
			},
			message: "Please enter your DOB"
		}
	},
	password: {
		type: String,
		required: [true, "Password required"],
		validate: {
			validator: function(value){
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,120}/.test(value);
			},
			message: "Password must contain 1 number, Uppercase letter, and special character"
		}
	}
})

const User = mongoose.model('User', UserSchema);


///routes\\\

app.get('/', (request, response)=>{
	response.render('index');
});

app.post('/registration', (request, response)=>{
	User.create({first_name: request.body.first_name, last_name: request.body.last_name, email: request.body.email, birthday: request.body.birthdate, password: request.body.password}, (error, user)=>{
		if(error){
			console.log("WRONG");
			for(var key in error.errors){
				request.flash('registration', error.errors[key].message);
			}
			response.redirect('/');
		}
		else{
			bcrypt.hash(user.password, 10);
			console.log("SUCCESS!!!");
			response.redirect('/');
		}
	})
})


// app.post('/registration', (request, response)=>{
// 	const user = new User({first_name:request.body.first_name, last_name:request.body.last_name, email_address:request.body.email, birthday: request.body.birthdate, password: request.body.password}).validate()
// 	.then((user)=>{
// 		bcrypt.hash('user.password', 10)
// 		.then((hashed_pass)=>{
// 			user.password = hashed_pass;
// 		})
// 		.catch((error)=>{
// 			for( const key in error.errors){
// 				request.flash('registration', error.errors[key].message);
// 			}
// 			response.redirect('/')
// 		})
// 		user.save()
// 		.then((user)=>{
// 			response.redirect('/')
// 		})
// 		.catch((error)=>{
// 			for(var key in error.errors){
// 				request.flash('registration', error.errors[key].message);
// 			}
// 			response.redirect('/');
// 		})
// 	})
// 	.catch((error)=>{
// 		for(var key in error.errors){
// 			request.flash('registration', error.errors[key].message);
// 		}
// 		response.redirect('/');
// 	})
// })



app.post('/sessions', (request, response)=>{
	User({email: request.body.elog, password:request.body.password}).validate()
		.then((user)=>{
			bcrypt.hash(request.body.password, 10)
		.then((hashed_pass)=>{
			User.find({email:request.body.email, password: hashed_pass})
				.then((user)=>{
					request.session = {first_name: user.first_name, last_name:user.last_name, email: user.email, birthday: user.birthday};
					response.redirect('/dashboard')
				})
				.catch((error)=>{
					for(var key in error.errors){
						request.flash('login', error.errors[key].message);
					}
					response.redirect('/')
				})
		})
		.catch((error)=>{
			for (var key in error.errors){
				request.flash('login', error.errors[key].message);
			}
			response.redirect('/')
		})
	})
})

app.get('/dashboard', (request, response)=>{
	response.render('dash');
})