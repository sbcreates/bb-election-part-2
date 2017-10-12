// require 'jquery-rails'

document.addEventListener("DOMContentLoaded", function() {

  $.ajax ({
    url: "https://bb-election-api.herokuapp.com/",
    method: 'GET',
    // data:
    datatype: 'json'
  }).done(function(data){
    // data['candidates'].forEach(function(candidate, index){
    //
    //     var $li = $('<li>', {class: 'candidate' + (index + 1)}).text('Name: ' + candidate[i]["name"] + '  |  Votes: ' + candidate[i]["votes"]);
    //
    //     $('#candidate-list').append($li)
    // })
    for (var i = 0; i < data['candidates'].length; i++){

      var $li = $('<li>', {class: 'candidate' + (i + 1)}).text('Name: ' + data["candidates"][i]["name"] + '  |  Votes: ' + data["candidates"][i]["votes"]);

      $('#candidate-list').append($li)
      }
    });
  });
