const planets =  {
    "Mercury": 0.38,
    "Venus": 0.91,
    "Earth": 1.0,
    "Mars": 0.38,
    "Jupiter": 2.34,
    "Saturn": 0.93,
    "Uranus": 0.92,
    "Neptune": 1.12,
    "Pluto": 0.06,
    "Moon": 0.17,
    "Sun": 27.9,
}

const planetPages =  {
    "Mercury": "mercury-weight.html",
    "Venus": "venus-weight.html",
    "Earth": "earth-weight.html",
    "Mars": "mars-weight.html",
    "Jupiter": "jupiter-weight.html",
    "Saturn": "saturn-weight.html",
    "Uranus": "uranus-weight.html",
    "Neptune": "neptune-weight.html",
    "Pluto": "pluto-weight.html",
    "Moon": "moon-weight.html",
    "Sun": "sun-weight.html",
}


function myFunction(){
    let userWeight = document.getElementById("userWeight").value;
    let userPlanet = document.querySelector("#planets");
    let planetValue = userPlanet.value;
    let planetPage = planetPages[planetValue]
    let weightOutput = userWeight * planets[planetValue];
    if (weightOutput != 0){
        window.location = planetPage;
    } else {
        alert("Please Enter a Weight.")
    }
        
    

    localStorage.setItem("value", weightOutput.toFixed(2));


}

let storedInput = localStorage.getItem("value");
let output = storedInput

console.log(output)
document.getElementById("output").innerHTML = output
