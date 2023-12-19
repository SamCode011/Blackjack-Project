/* 
* 2C = Two of clubs
* 2D = Two of Diaminds
* 2H = Two of hearts
* 2S = Two os Spades
 */
let deck = [];
const types = ['C','D','H','S'];
const special =[]

const crearDeck = () => {
    for( let i = 2 ; i <=10 ; i++) {
        for (let type of types) {
            deck.push( i +type);
        }
    }
    for( let type of types) {
        for(let spec of special){
            deck.push(type + spec )
        }
    }
   

    console.log( deck ) ;
}

crearDeck();