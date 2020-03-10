var tigger = { 
	character: "Tigger"
	greet: function(){
		console.log("Wonderful thing about tiggers is tiggers are Wonderful things!")
	}
};
var pooh = { character: "Winnie the Pooh"};



var piglet = { character: "Piglet"};
var bees = { character: "Bees"};
var robin = { character: "Christopher Robin"};
var owl = { character: "Owl"};
var rabbit = { character: "Rabbit"};
var gopher = { character: "Gopher"};
var kanga = { character: "Kanga"};
var eeyore = { character: "Eeyore"};
var heffalumps = { character: "Heffalumps"};

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
	if(str == "north" || str == "North"){
		if(player.location.north == null){
			console.log("WRONG WAY BUCKO")
		}
		else{
			player.location = player.location.north;
			console.log( "you are now at "+ player.location.character + "'s"+ "house");
		}
	}
	if(str == "west" || str == "West"){
		if(player.location.west == null){
			console.log("WRONG WAY BUCKO")
		}
		else{
			player.location = player.location.west;
			console.log( "you are now at "+ player.location.character + "'s"+ "house");
		}
	}
	if(str == "east" || str == "East"){
		if(player.location.east == null){
			console.log("WRONG WAY BUCKO")
		}
		else{
			player.location = player.location.east;
			console.log( "you are now at "+ player.location.character + "'s"+ "house");
		}
	}
	if(str == "south" || str == "South"){
		if(player.location.south == null){
			console.log("WRONG WAY BUCKO")
		}
		else{
			player.location = player.location.south;
			console.log( "you are now at "+ player.location.character + "'s"+ "house");
		}
	}
}

