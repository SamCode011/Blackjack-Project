/* 
* 2C = Two of clubs
* 2D = Two of Diaminds
* 2H = Two of hearts
* 2S = Two os Spades
 */
let deck = [];
const types = ['C', 'D', 'H', 'S'];
const special = []
//event-click
const btnnewgm =document.querySelector('#btn-newgm');
//creating new deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }
    for (let type of types) {
        for (let spec of special) {
            deck.push(type + spec)
        }
    }


    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

const hit = () => {
    if (deck.length === 0) {
        throw "no more cards in the deck"
    }


    const card = deck.pop();
    console.log(deck);
    console.log(card); //belong card in the deck
    return card;
}
hit();

//hit

const valueCard = (card) => {
    //*method substring and isNaN
    const value = card.substring(0 ,card.length -1);
    return ( isNaN (value))?
    ( value === 'A') ?11 :10 
     : value * 1;
}
const value = valueCard(hit()) ;
console.log({value})


//*Events
btnnewgm.addEventListener('click', () => {
    
})