$(function() {
  /* Hamburger animation */
  /*$('.js-hamburger').on('click', function(e) {
    $('.navbar__toggle-icon').toggleClass('active')
    if (!$(this).prop('checked')) {
      setTimeout(function() {
        $('.navbar__menu').css('display', 'none')
      }, 200)
    }
  })*/
  var progressValues = {
    value: 126,
    max: 1000
    /* value: 827,
    max: 1000 */
  }

  var percentage = progressValues.value / progressValues.max

  var calculatedWidth = (percentage * 80)

  var progress = $('.js-progress')
  progress.css('width', calculatedWidth)

  $('.js-like-card-active-range').css('width', ($('.js-like-card-range').attr('value') / 100) + '%')
  $('.js-like-card-amount').text($('.js-like-card-range').attr('value'))
  /* Like card */
  $('.js-like-card-range').on('input', function(e) {
    $('.js-like-card-amount').text(e.target.value)
    var calculatedWidth = e.target.value / 100
    $('.js-like-card-active-range').css('width', calculatedWidth + '%')
  })
});