// Code your solutions in this file
// const writeCards = [ 'Lisa', 'Kaitlin', 'Jan' ]

function writeCards(array, surprise) {
    let cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${surprise} gift!`)
    }
    return cards
}

function countDown(num) {
   while (0 < num) {
       console.log(num);
       num -= 1;
   }
   console.log(num)
}