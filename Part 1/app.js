
$.getJSON(`http://numbersapi.com/6/?json`, resp => {
    fact = resp.text;
    $('#num-fact').append(`<li>${fact}</li>`)
})



$.getJSON(`http://numbersapi.com/6,13,420/?json`, resp => {
    json = resp;
    appendFacts(json)
})

function appendFacts(json) {
    let keys = Object.keys(json)
    for (let key of keys) {
        $('#nums-fact').append(`<li>${json[key]}</li>`)
    }
}



let fourPromises = []

for (let i = 0; i < 4; i++) {
    fourPromises.push($.getJSON(`http://numbersapi.com/6/?json`, resp => {
        json = resp
    }))
}

Promise.all(fourPromises)
    .then(resArr => (
        resArr.forEach(p => $('#num-facts').append(`<li>${p.text}</li>`))
    ))

