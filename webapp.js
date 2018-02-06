// JavaScript Document

window.onload = function() {
	// load cookies
	
	// pick a random meme to start
	changeMeme();
};

function changeMeme(){
	document.getElementById("a").removeEventListener("click", rightAnswer);
	document.getElementById("a").removeEventListener("click", wrongAnswer);
	document.getElementById("b").removeEventListener("click", rightAnswer);
	document.getElementById("b").removeEventListener("click", wrongAnswer);
	document.getElementById("c").removeEventListener("click", rightAnswer);
	document.getElementById("c").removeEventListener("click", wrongAnswer);
	document.getElementById("d").removeEventListener("click", rightAnswer);
	document.getElementById("d").removeEventListener("click", wrongAnswer);
	
	
	var rand = Math.ceil(Math.random() * 20);
	//alert("choosing meme #" + rand);
	switch(rand) {
		case 1: // do you know da wae
			document.body.style.backgroundImage = "url('images/do_you_know_da_wae.jpg')";
			document.getElementById("a").innerHTML = "Do u know da wae?";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Tide pods r delicious";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Condesending Willy Wonka";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 2: //Disaster Girl
			document.body.style.backgroundImage = "url('images/disaster_girl.jpg')";
			document.getElementById("a").innerHTML = "Disaster Girl";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "vader and buddy";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Condesending Willy Wonka";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "the evil of christmas";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 3: //Your Next
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
		case 4://You Don't Say
			document.body.style.backgroundImage = "url('images/youdontsay.png')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "you don't say";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 5: //Yo Dawg
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
			document.body.style.backgroundImage = "images/condesending_willy_wonka.jpg')";
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
		case 8: //Confused Mr. Krabbs
			document.body.style.backgroundImage = "url('images/confused_Mr.krabbs.jpg')";
			document.getElementById("a").innerHTML = "Confused Mr. Krabbs";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "you're next";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 9: //Evil Kermit
			document.body.style.backgroundImage = "url('images/evil-kermit.jpg')";
			document.getElementById("a").innerHTML = "Evil Kermit";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "you don't say";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 10: //Grumpy Cat
			document.body.style.backgroundImage = "url('images/grumpy_cat.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "i am your father";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 11: //Epic Sax Guy
			document.body.style.backgroundImage = "url('images/epicsaxguy.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "epic sax guy";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "joseh decreux";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "stuck in the 80's";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 12: //Forest Gump
			document.body.style.backgroundImage = "url('images/forestgump.jpeg')";
			document.getElementById("a").innerHTML = "what???";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "christmas hangover";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "ermahgerd";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "forest gump";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 13: //Expanding Brain
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
		case 14: //Phil Swift
			document.body.style.backgroundImage = "url('images/philswift.jpg')";
			document.getElementById("a").innerHTML = "philswift";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "seal the deal";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "he protec";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 15: //Crack Kid
			document.body.style.backgroundImage = "url('images/crackkid.jpg')";
			document.getElementById("a").innerHTML = "fat wise guy";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "knowllllllledge";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Crack Kid";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "fry sauinty eyes";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 16: //Good Guy Greg
			document.body.style.backgroundImage = "url('images/good_guy_greg.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Good Guy Greg";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "i am your father";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 17: //Hipster Ariel
			document.body.style.backgroundImage = "url('images/hipster_ariel.jpeg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Hipster Ariel";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "joseh decreux";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "stuck in the 80's";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 18: //Joseph D
			document.body.style.backgroundImage = "url('images/joseph_ducreux.png')";
			document.getElementById("a").innerHTML = "what???";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "christmas hangover";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Joseph D";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "forest gump";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 19: //Logan Paul
			document.body.style.backgroundImage = "url('images/loganpaul.jpg')";
			document.getElementById("a").innerHTML = "flex seal";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "evolution";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "radioactive";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Logan Paul";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 20: //Mocking Spongebob
			document.body.style.backgroundImage = "url('images/mocking_spongebob.jpg')";
			document.getElementById("a").innerHTML = "Mocking Spongebob";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "seal the deal";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "he protec";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
	
			
			
	} // end switch
} // end changeMeme()
function wrongAnswer(){
	 alert("false answer");
	 // subtract from score
	 
	 // load a new meme
	 changeMeme();
}

function rightAnswer(){
	 alert ("correct answer");
	 // add to score
	 
	 // load a new meme
	 changeMeme();
	 score++;
	 
	 
	 
}

var score= document.getElementById("score");
var score= 0;
var y = 0;






	







