let numero
let palpite

numero = Math.randomRange(0, 9)
console.log("Numero sorteado foi: " + numero)
while (palpite != numero) {
    palpite = game.askForNumber("Qual seu palpite?", 1)

    if (palpite < numero) {
        game.splash("Tente um número maior")
    } else if(palpite > numero) {
        game.splash("Tente um número menor")
    }
}

game.gameOver(true)