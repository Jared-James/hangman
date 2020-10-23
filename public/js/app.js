const hangmanGame = document.getElementById('game')
const hangmanStatus = document.getElementById('status')

let game


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
        game.makeGuess(guess) 
        render()  
    })
    
const render = () => {
  console.log(game)
    hangmanGame.textContent = game.uzzle  
    hangmanStatus.textContent = game.showStatus().textContent
    
      game.puzzle.split('').forEach(letter => {
      const letterEl = document.createElement('span')
      letterEl.textContent = letter
      hangmanGame.appendChild(letterEl)
   }) 
       
}

  const startGame = async () => {
    const puzzle = await getPuzzle()
    game = new Hangman(puzzle, 10)
    render()
  }  

document.getElementById('reset').addEventListener('click', startGame)

startGame()

