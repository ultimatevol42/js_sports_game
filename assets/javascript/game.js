let teamoneshots = document.querySelector("#teamone-numshots"); 
const teamOneButton = document.querySelector("#teamone-shoot-button");
let teamOneNumGoals = document.querySelector("#teamone-numgoals")
teamOneButton.addEventListener("click", function () {
    console.log("Team one button press");
    let newCounterValue = Number(teamoneshots.innerHTML) + 1;
    teamoneshots.innerHTML = newCounterValue;
    let score = Math.random ()
    if (score < 0.7){
        let newShotValue = Number(teamOneNumGoals.innerHTML) + 1;
        teamOneNumGoals.innerHTML = newShotValue;
    }
})
let teamtwoshots = document.querySelector("#teamtwo-numshots");
const teamTwoButton = document.querySelector("#teamtwo-shoot-button");
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals")
teamTwoButton.addEventListener("click", function () {
    console.log("Team Two button press");
    let newCounterValue = Number(teamtwoshots.innerHTML) + 1;
    teamtwoshots.innerHTML = newCounterValue;
    let score2 = Math.random()
    if (score2 < 0.5){
        let newShot2Value = Number(teamTwoNumGoals.innerHTML) + 1;
        teamTwoNumGoals.innerHTML = newShot2Value;
    }
})
let numresets = document.querySelector( "#num-resets")
const resetbutton = document.querySelector("#reset-button");
console.log(resetbutton)
resetbutton.addEventListener("click", function () {
    console.log("reset-button press");
    let newCounterValue = Number(numresets.innerHTML) + 1;
    numresets.innerHTML = newCounterValue;
    teamoneshots.innerHTML = 0
    teamtwoshots.innerHTML = 0
    teamOneNumGoals.innerHTML = 0
    teamTwoNumGoals.innerHTML = 0
})
