var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
function outputPlanetsOld(array){
	for (var i = 0; i < array.length; i++) {

	}
}

outputPlanetsOld(planets);
function outputPlanets(planet){
	document.getElementById("planets").innerHTML += "<div>" +  planet  + "</div>";
};

// planets.forEach(outputPlanets)

var el = document.getElementById("planets");

// Use the map method to create a new array where the first letter of each planet is capitalized

function capitalizePlanets(caps) {
	return caps.charAt(0).toUpperCase() + caps.substring(1).toLowerCase();
};



// Use the filter method to create a new array that contains planets with the letter 'e'

function filterIt(myPlanets){
	if(myPlanets.length === "e"){
		return myPlanets;
	}
};

planets.map(capitalizePlanets).forEach(outputPlanets).filter(filterIt);


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];