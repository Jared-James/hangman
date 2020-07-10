const hangmanGame = document.getElementById('game')
const game1 = new Hangman('car parts', 3)
game1.checkStatus  
game1.showStatus

hangmanGame.textContent = game1.Puzzle

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess) 
        game1.checkStatus() 
        hangmanGame.textContent = game1.Puzzle    
    })

const myPuzzle = getPuzzle()

myPuzzle.then((data) => {
    console.log(data)
}).catch(error => {
    console.log(error)
})

const Country = getCountry('NZ')

Country.then(data => {
    console.log(`Your country name: ${data}`)
}).catch(error => {
    console.log(error)
})


const myLocation = getLocation()

myLocation.then(data => {
    console.log(data)
}).catch(err =>{
    console.log(err)
})



// const myCountry = getCountry('NZ')

// myCountry.then((country) => {
//     console.log(`Your Country: ${country.name}`)
// }, error => {
//     console.log(error)
// })


// fetch('http://puzzle.mead.io/puzzle').then(response => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('unable to fetch puzzle')
//     }
// }).then((data) => {
//     console.log(` promise: ${data.puzzle}`)
// }).catch((error) => {
//     console.log(error)
// })

