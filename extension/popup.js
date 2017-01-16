$(function() {
  $('#name').keyup(function() {
    $('#greeting').text($('#name').val());
    console.log($('#name').val());
  });
});
