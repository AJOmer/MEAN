class Ninja {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.speed = 3;
		this.strength = 3;
	}
	sayName (){
		console.log(`My ninja name is ${this.name}`);
	}
	showStats(){
		console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
	}
	drinkSake(){
		this.health += 10;
	}
}

const newnin = new Ninja("Drew");
newnin.sayName();
newnin.showStats();
newnin.drinkSake();
newnin.showStats();


class Sensei extends Ninja {
	constructor(name){
		super(name);
		this.name = name;
		this.health = 200;
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
	}
	speakWisdom(){
		super.drinkSake();
		console.log("You miss 100% of the shots you don't take")
	}
}
const superSensei = new Sensei("Big Bert");
superSensei.speakWisdom();
superSensei.showStats();