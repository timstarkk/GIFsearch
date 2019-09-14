const numbers = {
    one: 0,
    two: 1,
    three: 2,
    four: 3,
    five: 4,
    six: 5,
    seven: 6,
    eight: 7
}

let data;

let moving = false;

function createSearchButton(term) {
    $('#buttons').append(`<button class="searchButton btn btn-secondary">${term}</button>`)
    $('#searchTerm')[0].value = ''
};


function searchTerm(search) {
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=CqZy82L3gwNLs4EHQAOzV3mswCe9WE6U&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        data = response.data;
        console.log(data);

        $('#one').html(`<img class="still" src="${data[0].images.original_still.url}" height="${data[0].images.original.height} width="${data[0].images.original.width}>`)
        $('#two').html(`<img class="still" src="${data[1].images.original_still.url}" height="${data[1].images.original.height} width="${data[1].images.original.width}>`)
        $('#three').html(`<img class="still" src="${data[2].images.original_still.url}" height="${data[2].images.original.height} width="${data[2].images.original.width}>`)
        $('#four').html(`<img class="still" src="${data[3].images.original_still.url}" height="${data[3].images.original.height} width="${data[3].images.original.width}>`)
        $('#five').html(`<img class="still" src="${data[4].images.original_still.url}" height="${data[4].images.original.height} width="${data[4].images.original.width}>`)
        $('#six').html(`<img class="still" src="${data[5].images.original_still.url}" height="${data[5].images.original.height} width="${data[5].images.original.width}>`)
        $('#seven').html(`<img class="still" src="${data[6].images.original_still.url}" height="${data[6].images.original.height} width="${data[6].images.original.width}>`)
        $('#eight').html(`<img class="still" src="${data[7].images.original_still.url}" height="${data[7].images.original.height} width="${data[7].images.original.width}>`)
        $('#nine').html(`<img class="still" src="${data[8].images.original_still.url}" height="${data[8].images.original.height} width="${data[8].images.original.width}>`)
        $('#ten').html(`<img class="still" src="${data[9].images.original_still.url}" height="${data[9].images.original.height} width="${data[9].images.original.width}>`)
    });
}

function playGifs(number, gif) {
    moving = true;

    $(`#${number}`).html(`<img src="${gif}" height="${number.height} width="${number.width}>`)
}

function stillGifs(number, gif) {
    moving = false;

    $(`#${number}`).html(`<img src="${gif}" height="${number.height} width="${number.width}>`)
}

$('#search').on('click', function (event) {
    event.preventDefault();
    $('#searchTerm').html('');
    let term = $('#searchTerm')[0].value;
    createSearchButton(term);
    searchTerm(term);
});


$('.resultBox').on('click', function (e) {
    let number = this.id;

    let num = numbers[number];

    let gif = data[num].images.original.url;

    let stillGif = data[num].images.original_still.url;

    if (moving === false) {
        playGifs(number, gif);
    } else {
        stillGifs(number, stillGif);
    }
});


$('#buttons').on('click', "button.searchButton", function () {
    value = $(this).text()
    searchTerm(value);
});