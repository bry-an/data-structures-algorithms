const shuffle = (k) => {

    const random = (k) => {
        return Math.ceil(Math.random() * k);
    };
    const cards = createDeck(k);

    const deckSize = cards.length;
    for (let i = 0; i < deckSize; i++) {
        let randomNumber = random(deckSize - 1);
        const randomCard = cards[randomNumber];
        const tmp = randomCard;
        cards[randomNumber] = cards[i];
        cards[i] = tmp;
    }
    return cards;
};

const createDeck = (amount) => {
    const deckArr = [];

    for (let i = 0; i < amount; i++) {
        deckArr.push(i + 1);
    }
    return deckArr;
};