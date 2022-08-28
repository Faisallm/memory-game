// adding elements to our grids
// we are going to create 12 cards

// an array of objects.


// we are going to us this array to create a grid.
// we need 12 cards hence the repasting.

const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    }, {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    }, {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }, {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    }, {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }, {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    }, {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    }, {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }, {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    }, {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }, {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];


// console.log(cardArray);

// we want to sort array randomly
// nice trick to sort an array randomly
cardArray.sort(() => 0.5 - Math.random())

console.log(cardArray);


// create a board (a simple div element)
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChoosen = [];
let cardsChoosenIds = [];
const cardWon = [];

// console.log(gridDisplay);

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i)
        // we only want to call flipCard when we click 
        // on the card.
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

createBoard();



function checkMatch() {

    // select all the image elements
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChoosenIds[0];
    const optionTwoId = cardsChoosenIds[1];

    console.log(cards);

    console.log('check for match');

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You clicked the same image');
    }

    if (cardsChoosen[0] === cardsChoosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');

        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);

        cardWon.push(cardsChoosen);
        console.log(cardWon);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry try again');
    }
    cardsChoosen = [];
    cardsChoosenIds = [];
    resultDisplay.textContent = cardWon.length;

    if (cardWon.length == (cardArray.length)/2) {
        resultDisplay.textContent = 'Congratulations you found them all!';
    }
}

function flipCard() {
    // so as to know exactle which card we clicked.

    console.log(cardArray);


    let cardId = this.getAttribute('data-id');

    cardsChoosen.push(cardArray[cardId].name);
    cardsChoosenIds.push(cardId);

    console.log(cardsChoosen);
    console.log(cardsChoosenIds);
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChoosen.length === 2) {
        // setTimeout calls a function after a certain amount
        // of time has passed

        setTimeout(checkMatch, 500);
    }
}



