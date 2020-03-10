const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.send("Hello Express");
});
app.get('?', (request, response) => {
	response.send("Is this working?");
});
app.listen(3000, () => console.log("listening on port 3000"));
app.use(express.static(__dirname + "/static"));

