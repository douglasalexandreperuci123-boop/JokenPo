const result = document.querySelector(".result") 
const humanscore = document.querySelector("#Human-score")
const machinescore = document.querySelector("#Machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
  ROCK : 'Rock',
  PAPER : 'Paper',
  SCISSORS : 'Scissors'
}




const playHuman = (humanChoise) => {
  playTheGame(humanChoise, playMachine());
};

const playMachine = () => {
  const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano:" + human + "Máquina:" + machine);

  if(human === machine) {
 
    result.innerHTML = "Deu empate!"

  }


  else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
           (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
           (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER))

{ 
  humanScoreNumber ++
  humanscore.innerHTML = humanScoreNumber
  result.innerHTML ="Você ganhou"}
    

else {

    machineScoreNumber ++
    machinescore.innerHTML = machineScoreNumber 
    result.innerHTML = "Você perdeu para a alexa"
}


}
