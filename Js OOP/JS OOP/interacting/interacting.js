var tigger = { 
	character: "Tigger",
	greet: function(){
		console.log("Wonderful thing about tiggers is tiggers are Wonderful things!")
	}
};
var pooh = { 
	character: "Winnie the Pooh",
	greet: function(){
		console.log("oh bother")
	}
};
var piglet = { 
	character: "Piglet",
	greet: function(){
		console.log("oh dear, this is overwhelming")
	}
};
var bees = { 
	character: "Bees",
	greet: function(){
		console.log("Eastside better than westside")
	}
};
var robin = { 
	character: "Christopher Robin",
	greet: function(){
		console.log("how did i get stuck here with these talking animals")
	}
};
var owl = { 
	character: "Owl",
	greet: function(){
		console.log("hoot hoot")
	}
};
var rabbit = { 
	character: "Rabbit",
	greet: function(){
		console.log("i'm a rabbit ya dig")
	}
};
var gopher = { 
	character: "Gopher",
	greet: function(){
		console.log("gnawing away at these holes")
	}
};
var kanga = { 
	character: "Kanga",
	greet: function(){
		console.log("whats better than pooh? Kanga the kangaroo!")
	}
};
var eeyore = { 
	character: "Eeyore",
	greet: function(){
		console.log("i'm very depressed and you guys keep making fun of me :(")
	}
};
var heffalumps = { 
	character: "Heffalumps",
	greet: function(){
		console.log("heffalumps is a funny word")
	}
};

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
			player.location.greet();
		}
	}
	if(str == "west" || str == "West"){
		if(player.location.west == null){
			console.log("WRONG WAY BUCKO")
		}
		else{
			player.location = player.location.west;
			console.log( "you are now at "+ player.location.character + "'s"+ "house");
			player.location.greet();
		}
	}
	if(str == "east" || str == "East"){
		if(player.location.east == null){
			console.log("WRONG WAY BUCKO")
		}
		else{
			player.location = player.location.east;
			console.log( "you are now at "+ player.location.character + "'s"+ "house");
			player.location.greet();
		}
	}
	if(str == "south" || str == "South"){
		if(player.location.south == null){
			console.log("WRONG WAY BUCKO")
		}
		else{
			player.location = player.location.south;
			console.log( "you are now at "+ player.location.character + "'s"+ "house");
			player.location.greet();
		}
	}
}

