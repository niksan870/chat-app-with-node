var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('roomsList', function (rooms) {
  
  // rooms.forEach(function (room) {
  //   $('#select_room').append(jQuery('<option></option>').text(room))
  // });
  console.log(rooms);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
