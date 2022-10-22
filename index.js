const userName = prompt('Please enter your username');
let computerNum = Math.floor(Math.random() * 2) + 1
let num = prompt(`hello ${userName} Guess a number from 1 to 2`)
if (num === computerNum) {
  console.log(`${userName} you win this round now to the next round`)
} else {
  console.log(`${userName} you failed this round try again`)
}
