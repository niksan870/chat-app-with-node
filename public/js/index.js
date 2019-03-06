var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

console.log('Error');
$('#switch').on('click', function() {
  if($(this).text() === "Join"){
    $(this).text("Create");
    $('#join_form').css('display', 'none');
    $('#create_form').css('display', 'block');
  } else {
    $(this).text("Join");
    $('#join_form').css('display', 'block');
    $('#create_form').css('display', 'none');
  }
});

socket.on('roomsList', function (rooms) {
  rooms.forEach(function (room) {
    $('#select_room').append(jQuery('<option></option>').text(room))
  });
  console.log(rooms);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
