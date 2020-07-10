class Hangman {
    constructor(word, remainingGusses) {
    this.word = word.toLowerCase().split('')
    this.remainingGusses = remainingGusses
    this.guess = []
    this.status = 'playing'
}
 get Puzzle() {
    let puzzle = ''
    this.word.forEach(letter => {
        if (this.guess.includes(letter) || letter === ' ') {
            
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
   return puzzle
 }
makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guess.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status !== 'playing') {
        return     
       }

    if (isUnique) {
        this.guess.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.remainingGusses = this.remainingGusses - 1
    }
   
    this.checkStatus()
    this.showStatus()
 }
checkStatus() {
    const finished = this.word.every(letter => this.guess.includes(letter) || letter === ' ')
    if (this.remainingGusses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
    console.log('current status',this.status)
}
showStatus() {
    let showStatus = document.getElementById('status')
    let result = this.word.join('')
 
     if (this.status === 'playing') {
         showStatus.textContent = `You currently have ${this.remainingGusses} gusses left`
     } else if (this.status === 'finished') {
         showStatus.textContent = `great job you gussed the word ${result}`
     } else if (this.status === 'failed') {  
         showStatus.textContent = `WRONG,  the word was ${result}`
     }
 
 
    return showStatus
 }
}
