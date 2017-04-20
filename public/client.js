console.log('testing JS');

$(document).ready(onReady);

function onReady() {
  console.log('odc ready');
// event listener
  $('#add-song').on('click', addSong);
}

function addSong() {
  console.log('in addSong');
  var songName = $('#song-name').val();
  console.log('songName ->', songName);

var objectToSend = {
    name: songName
  };
 console.log('objectToSend', objectToSend); // long the new song entered

// .ajax is performing the request
$.ajax({
  method: 'POST', // POST needs to be capitlize calling app.post from server.js
  url: '/song', //this is our url/path to our song array/object
  data: objectToSend, //this is the body of what we're sending(body of the request)
  success: function(response) {
    console.log(response);
  }
});
}
