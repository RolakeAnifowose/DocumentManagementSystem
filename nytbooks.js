fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=I8uErmesF4soOINSXdN2vVP62DvzRWHA', {    method: 'get',  })  .then(response => { return response.json(); })  .then(json => { console.log(json); });

nytimesBestSellers.results.forEach(function(book) {  var isbn = book.isbns[1].isbn10;  var bookInfo = book.book_details[0];  var lastWeekRank = book.rank_last_week || ‘n/a’;  var weeksOnList = book.weeks_on_list || ‘New this week’;

    var listing =   '<div id="' + book.rank + '" class="entry">' +     '<p>' +       '<img src="" class="book-cover" id="cover-' + book.rank + '">' +     '</p>' +     '<h2><a href="' + book.amazon_product_url + '" target="_blank">' + bookInfo.title + '</a></h2>' +    '<h4>By ' + bookInfo.author + '</h4>' +    '<h4 class="publisher">' + bookInfo.publisher + '</h4>' +    '<p>' + bookInfo.description + '</p>' +     '<div class="stats">' +      '<hr>' +       '<p>Last Week: ' + lastWeekRank + '</p>' +       '<p>Weeks on list: ' + weeksOnList + '</p>' +    '</div>' +  '</div>';

    $('#best-seller-titles').append(listing);

    $('#' + book.rank).attr('nyt-rank', book.rank);

    updateCover(book.rank, isbn);

    function updateCover(id, isbn) {  fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + "&key=AIzaSyCw9u5yZM-NO_gKVDMHDSGAOUykT0_M7VQ" + apiKey, {    method: 'get'  })  .then(response => { return response.json(); })  .then(data => {    var img = data.items[0].volumeInfo.imageLinks.thumbnail;    img = img.replace(/^http:\/\//i, 'https://');    $('#cover-' + id).attr('src', img);  })    .catch(error=> {       console.log(error);  });}

    $(window).scroll(function (event) {  var scroll = $(window).scrollTop();  if (scroll > 50) {    $(‘#masthead’).css({‘height’:’50', ‘padding’ : ‘8’});    $(‘#nyt-logo’).css({‘height’:’35'});  } else {    $(‘#masthead’).css({‘height’:’100', ‘padding’:’10'});    $(‘#nyt-logo’).css({‘height’:’80'});  }});
});    