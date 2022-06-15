$(document).ready(function() {
  $('.tabs-main__item').click(function(e) {
    e.preventDefault();

    $('.tabs-main__item').removeClass('tabs-main__item--active');
    $('.tabs-content__item').removeClass('tabs-content__item--active');

    $(this).addClass('tabs-main__item--active');
    $($(this).attr('href')).addClass('tabs-content__item--active');
  });

  $('tabs-main__item:first').click();
})