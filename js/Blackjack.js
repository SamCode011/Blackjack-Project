/* 
* 2C = Two of clubs
* 2D = Two of Diaminds
* 2H = Two of hearts
* 2S = Two os Spades
 */
let deck = [];
const types = ['C', 'D', 'H', 'S'];
const special = []
//scores
let scorePlayer = 0,
    scoreComputer = 0;
//event-click
const btnnewgm =document.querySelector('#btnnewgm');
const btnhit =document.querySelector('#btnhit');
const btnstand =document.querySelector('#btnstand');
const divPlayerCards =document.querySelector('#player-cards');
const divComputerCards =document.querySelector('#computer-cards')
const scoreHTML =document.querySelectorAll('small');
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

//*Add Sound

//*Turn-computer

const turnComputer = (scoreMin) => {
    do {
        const card = hit();
        scoreComputer = scoreComputer + valueCard (card) ;
        scoreHTML[1].innerText = scoreComputer ;

        const imgCard =document.createElement('img');
    imgCard.src =`./cartas/${ card }.png`;
    imgCard.classList.add('card');
    divComputerCards.append(imgCard);
    if (scoreMin > 21){
        break ;
    }
    }while((scoreComputer < scoreMin) && (scoreMin <=21))


    setTimeout(() => {
        if(scoreComputer === scoreMin) {
            alert('draw')
        }else if(scoreMin > 21) {
            alert('win computer')
           
        }else if(scoreComputer >21){
            alert('You Win')
        
        }else{
            alert('win computer')
        }

    },100);
}


//*Events
btnhit.addEventListener('click', () => {
    const card = hit();
    scorePlayer = scorePlayer + valueCard (card) ;
    scoreHTML[0].innerText = scorePlayer ;
    //<img class="card" src="./cartas/10H.png" >//

    const imgCard =document.createElement('img');
    imgCard.src =`./cartas/${ card }.png`;
    imgCard.classList.add('card');
    divPlayerCards.append(imgCard);

    if(scorePlayer > 21) {
        console.warn('GAME OVER');
        btnhit.disabled =true ;
        btnstand.disabled =true;
    }else if (scorePlayer === 21 ) {
        console.warn('YOU WIN')
    }

})
btnstand.addEventListener('click',() => {
    btnhit.disabled =true ;
    btnstand.disabled =true ;

    turnComputer(scorePlayer);

});
btnnewgm.addEventListener('click', () => {
    console.clear() ;
    deck= [];
    deck =crearDeck();
    scorePlayer   = 0;
    scoreComputer = 0; 

    scoreHTML[0].innerText = 0 ;
    scoreHTML[0].innerText = 0 ;
    divComputerCards.innerHTML='';
    divPlayerCards.innerHTML='' ;

    btnhit.disabled=false ;
    btnstand.disabled=false;
})