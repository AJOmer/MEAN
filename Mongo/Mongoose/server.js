const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.listen(5000, () => console.log("listening on port 5000"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});


const UserSchema = new mongoose.Schema({
 name: String,
 age: Number
});
// create an object to that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.get('/', (request, response)=>{
	response.render('index', {title: 'Survey Form'});
});

app.post('/users', (request, response)=> {
  const user = new User();
  user.name = request.body.name;
  user.age = request.body.age;
  user.save()
    .then(newUserData => console.log('user created: ', newUserData))
    .catch(error => console.log(error));
   
  response.redirect('/');
});
app.get('/', (request, response) => {  
    User.find()
        .then(data => response.json("index"))
        .catch(error => response.json(error));
});

