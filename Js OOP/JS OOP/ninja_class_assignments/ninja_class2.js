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
	this.punch = function(badguy){
		if(badguy instanceof Ninja){
			badguy.health -=5;
			console.log(badguy.name+"was punched by "+ this.name+" and lost 5 health!");
		}
	}
	this.kick = function(badguy){
		if(badguy instanceof Ninja){
			badguy.health -=15;
			console.log(badguy.name+"was kicked by "+ this.name+ " and lost 15 health")
		}
	}
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);