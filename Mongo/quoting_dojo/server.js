///imports\\\
const express = require("express");
const app = express();


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const SessionStore = require("session-mongoose");
const session = require("express-session");
const flash = require('express-flash');


// /Config\\\
app.use(flash());
app.use(session({
    secret: "quotes",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));



// /DATABASE\\\





////ROUTES\\\\
require('./server/config/routes.js')(app);


app.listen(5000, () => console.log("listening on port 5000"));