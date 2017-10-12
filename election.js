// require 'jquery-rails'

document.addEventListener("DOMContentLoaded", function() {

  $.ajax ({
    url: "https://bb-election-api.herokuapp.com/",
    method: 'GET',
    datatype: 'json'
  }).done(function(data){

    for (var i = 0; i < data['candidates'].length; i++){

      var $li = $('<li>', {class: 'candidate' + (i + 1)}).text('Name: ' + data["candidates"][i]["name"] + '  |  Votes: ' + data["candidates"][i]["votes"]);

      $('#candidate-list').append($li)

      var $form = $('<form>', {class: 'candidate' + (i + 1) + '-form', method: 'POST', action: 'https://bb-election-api.herokuapp.com/vote'});

      $('.candidate' + (i + 1)).append($form);

      var $submit = $('<input>', {type: 'submit', id: 'submit', value: 'Vote for me!'});

      var $hidden = $('<input>', {type: 'hidden', name: 'id', value: data["candidates"][i]['id']});

      $('.candidate' + (i + 1) + '-form').append($hidden).append($submit);


      $('.candidate' + (i + 1)).on('submit', function(e){
        e.preventDefault();
        var $voteValue = this.querySelector('input[type=hidden]').value;
        var self = $(this)

        $.ajax ({
          url: 'https://bb-election-api.herokuapp.com/vote?id=' + $voteValue,
          method: 'POST',
          datatype: 'json'
        }).done(function(){
          location.reload();

        }).fail(function(){
          alert('Uh Oh. Something went wrong')

        });
        });

      }
    })

  });
