function Ninja(name){
	this.name = name;
	this.speed = 3;
	this.strength = 3;
	this.health = 100;

	this.sayName = function(){
		console.log("my ninja name is "+ this.name);
	}
	this.showStats = function(){
		console.log("Name: "+this.name+ ", "+ "health: "+this.health+" , "+"Speed: "+this.speed+" , "+ "Strength: "+this.strength);
	}
	this.drinkSake = function(){
		this.health = this.health + 10;
	}
}
var ninja1 = new Ninja("Jorge");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();