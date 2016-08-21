var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
function outputPlanetsOld(array){
	for (var i = 0; i < array.length; i++) {

	}
}

outputPlanetsOld(planets);
function outputPlanets(planet){
	el.innerHTML += "<div>" +  planet  + "</div>";
};


var el = document.getElementById("planets");


function capitalizePlanets(caps) {
	return caps.charAt(0).toUpperCase() + caps.substring(1).toLowerCase();
};



// Use the filter method to create a new array that contains planets with the letter 'e'

var ePlanets = planets.filter(function(planet){
  return planet.indexOf("e") !== -1;
});

console.log(ePlanets)

planets.map(capitalizePlanets).forEach(outputPlanets)


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


words = words.reduce(function(a,b){
  return a + " " + b;
});
console.log(words)

document.getElementById("words").innerHTML += "<div>" + words + "</div>";




