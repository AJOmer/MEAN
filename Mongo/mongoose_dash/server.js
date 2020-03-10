const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const session = require("express-session");
const flash = require('express-flash');

app.use(flash());
app.use(session({
    secret: "wolves",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



///Routes\\\
require('./server/config/routes.js')(app);



app.listen(5000, () => console.log("listening on port 5000"));








