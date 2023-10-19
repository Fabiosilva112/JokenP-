let result = document.querySelector(".result")
let score1 = document.querySelector(".score1")
let score2 = document.querySelector(".score2")
let clean = document.querySelector(".clean")
let pontHuman = 0;
let pontMachine = 0;

const myGame = (humanChoice) => {

    playTheGame(humanChoice, gameMachine())
    /* Essa função está sendo chamada assim que clicamos no botão, fazendo com que os valores dos parâmestros vão parar nos parâmetros da função playTheGame, ou seja o valor da maquina e o valor do humano. */

    result.style.display = 'block'
}

const gameMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    /* O Math.floor esta arredondando o valor do Math.random pra baixo fazendo com que ele gere apenas (0,1,2) desse modo vai pecorrer todo o array */
    return (choices[randomNumber])
}

const playTheGame = (human, machine) => {
    /* Esses paramêtros Estão recebendo o valor de humanChoice, gameMachine() */
    if (human === machine) {
        result.innerHTML = "Deu empate"
        result.style.color = 'blue'
    } else if (
        
        human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper') {

        result.innerHTML = "Você ganhou"
        result.style.color = 'green'
        pontHuman++

        score1.innerHTML = pontHuman

    } else {
        result.innerHTML = "Alexa ganhou"
        result.style.color = 'red'
        pontMachine++

        score2.innerHTML = pontMachine
    }
}
const cleanPontuan = () =>{
    pontHuman = 0
    pontMachine = 0

    score2.innerHTML = pontMachine
    score1.innerHTML = pontHuman

    result.style.display = 'none'
}

clean.addEventListener('click', cleanPontuan)