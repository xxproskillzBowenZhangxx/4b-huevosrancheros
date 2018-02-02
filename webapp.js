// JavaScript Document
function changeMeme(){
	document.getElementById("a").removeEventListener("click", rightAnswer);
	document.getElementById("a").removeEventListener("click", wrongAnswer);
	document.getElementById("b").removeEventListener("click", rightAnswer);
	document.getElementById("b").removeEventListener("click", wrongAnswer);
	document.getElementById("c").removeEventListener("click", rightAnswer);
	document.getElementById("c").removeEventListener("click", wrongAnswer);
	document.getElementById("d").removeEventListener("click", rightAnswer);
	document.getElementById("d").removeEventListener("click", wrongAnswer);
	
	
	var rand = Math.ceil(Math.random * 50);
	switch(rand) {
		case 1: // do you know da wae
			document.body.style.backgroundImage = "url('images/douknowtheway.jpg')";
			document.getElementById("a").innerHTML = "Do u know da wae?";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Tide pods r delicious";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Condesending Willy Wonka";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 2:
			document.body.style.backgroundImage = "url('vader+elfonshelf.jpg')";
			document.getElementById("a").innerHTML = "vader and the elf on the shelf";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "vader and buddy";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Condesending Willy Wonka";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "the evil of christmas";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 3:
			document.body.style.backgroundImage = "url('images/yourenext.jpg')";
			document.getElementById("a").innerHTML = "the poker";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "you're next";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 4:
			document.body.style.backgroundImage = "url('images/youdontsay.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "you don't say";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 5:
			document.body.style.backgroundImage = "url('images/yo_dawg.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "yo dawg";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "i am your father";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 6: // Ben Swolo
			document.body.style.backgroundImage = "url('images/ben_swolo.jpg')";
			document.getElementById("a").innerHTML = "Ben Swolo";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Tide pods r delicious";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Condesending Willy Wonka";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 7: //Condesending Willy Wonka
			document.body.style.backgroundImage = "condesending_willy_wonka.jpg')";
			document.getElementById("a").innerHTML = "Condesending Willy Wonka";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "vader and buddy";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "you don't say";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "the evil of christmas";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 8: //lebron
			document.body.style.backgroundImage = "url('images/lebron.jpg')";
			document.getElementById("a").innerHTML = "the poker";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "you're next";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 9: // They See Me Rolling
			document.body.style.backgroundImage = "url('images/theyseemerolling.jpg')";
			document.getElementById("a").innerHTML = "They See Me Rolling";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "you don't say";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 10:
			document.body.style.backgroundImage = "url('images/grumpy-cat.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "i am your father";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 11:
			document.body.style.backgroundImage = "url('images/epicsaxguy.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "epic sax guy?";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "joseh decreux";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "stuck in the 80's";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 12:
			document.body.style.backgroundImage = "url('images/ermahgerd.jpg')";
			document.getElementById("a").innerHTML = "what???";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "christmas hangover";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "ermahgerd";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "forest gump";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 13:
			document.body.style.backgroundImage = "url('images/expanding_brain.jpg')";
			document.getElementById("a").innerHTML = "flex seal";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "evolution";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "radioactive";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "expanding brain";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
			case 14:
			document.body.style.backgroundImage = "url('images/flexseal.png')";
			document.getElementById("a").innerHTML = "flexseal";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "seal the deal";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "he protec";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 15:
			document.body.style.backgroundImage = "url('images/forestgump.jpeg')";
			document.getElementById("a").innerHTML = "fat wise guy";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "knowllllllledge";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "fry sauinty eyes";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
			
	}
}


<<<<<<< HEAD
=======
document.getElementById("c").innerHTML = "Condesending Willy Wonka";

document.getElementById("d").innerHTML = "the evil of christmas";
}
function DoUKnowTheWae(){
// img 1
document.body.style.backgroundImage = "url('images/douknowtheway.jpg')";
// answers
document.getElementById("a").innerHTML = "Do u know da wae?";

document.getElementById("b").innerHTML = "Tide pods r delicious";

document.getElementById("c").innerHTML = "Condesending Willy Wonka";

document.getElementById("d").innerHTML = "Pepe the Frog";
}
function DoUKnowTheWae(){
// img 1
document.body.style.backgroundImage = "url('images/douknowtheway.jpg')";
// answers
document.getElementById("a").innerHTML = "Do u know da wae?";

document.getElementById("b").innerHTML = "Tide pods r delicious";

document.getElementById("c").innerHTML = "Condesending Willy Wonka";



document.getElementById("d").innerHTML = "Pepe the Frog";
}
function DoUKnowTheWae(){
// img 1
document.body.style.backgroundImage = "url('images/douknowtheway.jpg')";
// answers
document.getElementById("a").innerHTML = "Do u know da wae?";

document.getElementById("b").innerHTML = "Tide pods r delicious";

document.getElementById("c").innerHTML = "Condesending Willy Wonka";

document.getElementById("d").innerHTML = "Pepe the Frog";
}
>>>>>>> 0b85b415144fc810d37d8ca688c7327373ca735d
