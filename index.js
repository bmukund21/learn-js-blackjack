
let player = {
    name: "BM",
    chips: 120,
}
console
let cards = []
let sum  = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":$ " + player.chips

//function to generate and return random number from 1 to 13
function getRandomCard(){
    // if 11-13, return 10
    // if 1, return 11
    let randomNumber = Math.floor(Math.random() * 13) + 1 // 1-13
    if(randomNumber > 10){
        return 10
        console.log(randomNumber)
    }else if (randomNumber === 1){
        return 11
        console.log(randomNumber)
    }else{
        return randomNumber
        console.log(randomNumber)
    }
}

//start the game
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

//render the cards
function renderGame(){
if(sum <= 20){
    message = "Do you want to draw a new card?"
    isAlive = true
}
else if (sum === 21){
    message = "You've got blackjack!"
    hasBlackJack = true
}
else {
    message = "You're out of the game"
    isAlive = false
}

messageEl.textContent = message
sumEl.textContent = "Sum: " + sum

cardsEl.textContent = "Cards: "
for(i=0; i< cards.length; i++){
cardsEl.textContent += cards[i] + " "
}
}

// draw a new card
function newCard(){
    if (isAlive === true && hasBlackJack == false){
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard 
    renderGame()
    }
}



