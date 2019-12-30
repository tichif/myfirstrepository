$(document).ready(function(){
  $("#menu-btn").click(function(){
    $('#links').toggle(2000);
    $('#menu-btn').toggleClass('turn');
  });
});