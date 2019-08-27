function createSearchButton(term) {
    $('#buttons').append(`<button class="searchButton btn btn-secondary">${term}</button>`)
    $('#searchTerm')[0].value = ''
};


function searchTerm(search) {
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=CqZy82L3gwNLs4EHQAOzV3mswCe9WE6U&limit=5";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        const { data } = response;
        const one = data[0].images.original.url;
        const two = data[1].images.original.url;
        const three = data[2].images.original.url;
        const four = data[3].images.original.url;
        const five = data[4].images.original.url;

        console.log(response);
        console.log(data);
        $('#area').append(`<img src="${one}">`)
        $('#area').append(`<img src="${two}">`)
        $('#area').append(`<img src="${three}">`)
        $('#area').append(`<img src="${four}">`)
        $('#area').append(`<img src="${five}">`)
    });
}

$('#search').on('click', function (event) {
    event.preventDefault();
    $('#searchTerm').html('');
    let term = $('#searchTerm')[0].value;
    console.log(term);
    createSearchButton(term);
});