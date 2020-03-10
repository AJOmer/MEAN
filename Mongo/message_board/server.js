const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const session = require("express-session");
const flash = require('express-flash');
const mongoose = require('mongoose');



app.use(flash());
app.use(session({
    secret: "messageboard",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
app.listen(5000, () => console.log("listening on port 5000"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


//DATABASE\\
mongoose.connect('mongodb://localhost/MessageBoard', {useNewUrlParser: true});

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	name: {type: String, required: true},
	message: {type: String, required: true, minlength: [2, "Enter Message"]},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});


const CommentSchema = new Schema({
	name: {type: String, required: true},
	comment: {type: String, required: true, minlength: [2, "Enter comment"]},
	_message: [{type: Schema.Types.ObjectId, ref: 'Message'}]
}, {timestamps: true});


const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);




//Routes\\

app.get('/', (request, response)=>{
	Message.find().populate("comments").exec((error, messages)=>{
		if(error){
			console.log("ERROR!!");
		}
		else {
			response.render('index', {"messages": messages});
		}
	})
});

app.post('/new_message', (request, response)=>{
	const new_message = new Message(request.body);
	new_message.save(function(error){
		if(error){
			console.log("CHECK YOUR ERROR");
			response.redirect('/');
		}
		else{
			response.redirect('/');
		}
	})
});


app.post('/new_comment/:id',function(request,response){
    Message.findOne({_id:request.params.id}, function(error,message){
        if(error)
            response.json(error);
        else{
            const new_comment = new Comment({
                _message: request.params.id,
                name: request.body.name,
                comment: request.body.comment
            });
            console.log(new_comment)
            new_comment.save(function(error){
                if(error)
                    response.redirect(error);
                else{
                    message.comments.push(new_comment._id);
                    message.save(function(error){
                        if(error)
                            response.json(error);
                        else
                            response.redirect('/');
                    });
                };
            });
        };  
    });
});



