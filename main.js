var title;
var author;
var description;
var image;
var url = 'https://www.googleapis.com/books/v1/volumes?q=';
var intitle = "+intitle";
var urlFinal;
var fetch = function () {
  $.ajax({
    method: "GET",
    url: urlFinal,

    dataType: "json",
    success: function(data) {
       console.log(urlFinal);
      var i = 0
    while (i < 11){
      if(data.items[i].volumeInfo.title){
        title = data.items[i].volumeInfo.title;
    }
      if(data.items[i].volumeInfo.authors){
        author = data.items[i].volumeInfo.authors[0];
    }
      if(data.items[i].volumeInfo.description){
        description = data.items[i].volumeInfo.description;
    }else {description = ""};
      if(data.items[i].volumeInfo.imageLinks){
        image =  data.items[i].volumeInfo.imageLinks.thumbnail;
    }
      $('.bookFound').append('<h1>'+'<strong>' + title +'</strong>'+ '</h1>' + '</br>' + '<p>' +description + '</p>' + '</br>' + '<h2>' + 'Written by: ' +  author + '</h2>' + '</br>'+'<img src="' + image + '">' + '<div class="page-header">' + '</div>' )
      console.log(data);
      i++
    }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
}; 
var addIsbn = function () {
   var isbn = $('#ISBNinput').val();
   var isbn2 = isbn.replace(/ /g,'+')
   urlFinal = url.concat(isbn2);
   urlFinal = urlFinal.concat(intitle)

 }
$('.center-block').on('click', addIsbn)
$('#myBtn').on('click', fetch);


