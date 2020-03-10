///original///
console.log(hello);                                   
var hello = 'world';                                 
///interpreter///
var hello;
console.log(hello);
hello = "world";


///original///
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
///interpreter///
var needle = 'haystack';
var needle = 'magnet';
function test(){
	console.log(needle); //magnet
}
test();
///original///
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
////interpreter///
var brendan;
function print(){
	brendan = 'only okay';
	console.log(brendan); ///super cool
}
brendan = 'super cool';
console.log(brendan);
///original///
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
///interpreter///
var food;
food = 'chicken';
console.log(food); ///chicken
eat();
function eat(){
	var food;
	food = 'half-chicken';
	console.log(food); ///half-chicken
	food = "gone";
}

///original///
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
///interpreter///
var mean;
mean();
console.log(food);///error
var food = 'fish';
food = 'chicken';
console.log(food); ///chicken
console.log(food); ///chicken

///original///
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
////interpreter///
var genre;
function rewind(){
	var genre;
	genre = 'rock';
	console.log(genre);///rock
	genre = 'r&b';
	console.log(genre);///r&b
}
console.log(genre)
genre = 'disco';
rewind();
console.log(genre);///disco

/////original///
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
///interpreter///
function learn(){
	var dojo = 'seattle';
	console.log(dojo);///seattle
	dojo = "burbank";
	console.log(dojo);///burbank
}
dojo = "san jose";
console.log(dojo);///san jose
learn();
console.log(dojo);////san jose