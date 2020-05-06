$(document).ready(function(){

  $('.open-theme').on('click', function(e){
    e.preventDefault();
    $('.all-theme').stop().slideToggle('');
    $(this).stop().toggleClass('active-theme');
  });


  $('.op').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('open-info');
    $(this).parent().find('.all-info').stop().slideToggle('');
  });

})