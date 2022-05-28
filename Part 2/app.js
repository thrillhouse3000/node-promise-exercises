function drawTwo() {
    let card;
    let id;
    $.getJSON(`http://deckofcardsapi.com/api/deck/new/draw/?count=1`)
        .then(resp => {
            id = resp.deck_id
            card = resp.cards[0]
            console.log(`${card.value} of ${card.suit}`)
            return $.getJSON(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=1`) 
        }).then(resp => {
            card = resp.cards[0]
            console.log(`${card.value} of ${card.suit}`) 
        })
}

let id;
let card;

// make new deck on load
$.getJSON(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(resp => {
        id = resp.deck_id
        console.log(id)
    })

function drawCard() {
    $.getJSON(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
        .then(resp => {
            card = resp.cards[0]
            $('#card').attr('src', card.image)
        })
}

$('#hit-me').on('click', drawCard)

