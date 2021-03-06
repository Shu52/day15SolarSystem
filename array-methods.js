const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
// const planetEl = document.getElementById("planets")
// const secRef = document.querySelector("#planets")

// const planetFun = function(planetArray){
//     console.log(planetArray)
//     let textNode = document.createElement("p")
//     textNode.textContent = `${planetArray}`
//     console.log(textNode)
//     console.log(planetEl)
//     planetEl.appendChild(textNode)
//     console.log(planetEl)
    
// }
// planets.forEach(planetFun)


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetsCap = planets.map(function(planet){
    return planet.charAt(0).toUpperCase() + planet.slice(1);
});
// console.log(planetsCap)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const ePlanets = planets.filter(planet=>{
    const hasE = planet.includes("e")
    return hasE;
})
console.log(ePlanets)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const allWords = words.reduce(
    (currentTotal, next) => currentTotal + next
)
console.log(allWords);