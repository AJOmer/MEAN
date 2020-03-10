var tigger = { character: "Tigger"};
var pooh = { character: "Winnie the Pooh"};
var piglet = { character: "Piglet"};
var bees = { character: "Bees"};
var robin = { character: "Christopher Robin"};
var owl = { character: "Owl"};
var rabbit = { character: "Rabbit"};
var gopher = { character: "Gopher"};
var kanga = {character: "Kanga"};
var eeyore = { character: "Eeyore"};
var heffalumps = {character: "Heffalumps"};

tigger.north = pooh;

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = robin;

piglet.east = pooh;
piglet.north = owl;


bees.west = pooh;
bees.north = rabbit;

robin.south = pooh;
robin.west = owl;
robin.north = kanga;
robin.east = rabbit;

owl.east = robin;
owl.south = piglet;

rabbit.south= bees;
rabbit.west = robin;
rabbit.east = gopher;


gopher.west = rabbit;

kanga.south= robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffalumps;

heffalumps.west = eeyore;


var player = {
	location : tigger
}

function moveplayer(str){
	if( str == "north"){
		player.location = player.location.north;
		return "you are now at "+ player.location.character + " 's"+ "house";
	}
	if( str == "west"){
		player.location = player.location.west;
		return "you are now at "+ player.location.character + " 's"+ "house";
	}
	if( str == "east"){
		player.location = player.location.east;
		return "you are now at "+ player.location.character + " 's"+ "house";
	}
	if( str == "south"){
		player.location = player.location.south;
		return "you are now at "+ player.location.character + " 's"+ "house";
	}
	else{
		return "You may not go that way!";
	}
}