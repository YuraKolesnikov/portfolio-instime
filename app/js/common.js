$(function() {
  /* Hamburger animation */
  $('.js-hamburger-open').on('click', function(e) {
    $(this).addClass('hidden')
    $('.js-hamburger-close').removeClass('hidden')
  })

  $('.js-hamburger-close').on('click', function(e) {
    $(this).addClass('hidden')
    $('.js-hamburger-open').removeClass('hidden')
  })

  /*$('.js-hamburger').on('click', function(e) {
    $('.navbar__toggle-icon').toggleClass('active')
    if (!$(this).prop('checked')) {
      setTimeout(function() {
        $('.navbar__menu').css('display', 'none')
      }, 200)
    }
  })*/
  var progressValues = {
    value: 827,
    max: 1000
  }

  var percentage = progressValues.value / progressValues.max

  var calculatedWidth = (percentage * 80)

  var progress = $('.js-progress')
  progress.css('width', calculatedWidth)

  
  /* Like card */
  $('.js-like-card-active-range').css('width', ($('.js-like-card-range').attr('value') / 100) + '%')
  $('.js-like-card-amount').text($('.js-like-card-range').attr('value'))
  $('.js-like-card-range').on('input', function(e) {
    $('.js-like-card-amount').text(e.target.value)
    var calculatedWidth = e.target.value / 100
    $('.js-like-card-active-range').css('width', calculatedWidth + '%')
  })

  /* Metrics card */
  var metricValues = [
    { actual: 827, max: 1000, backgroundColor: '159, 36, 190' },
    { actual: 27890, max: 30000, backgroundColor: '212, 31, 139' },
    { actual: 126, max: 1000, backgroundColor: '139, 51, 188' }
  ]
  var bars = Array.from($('.js-progress'))

  bars.forEach(function(bar, i) {
    var result = metricValues[i].actual / metricValues[i].max * 100
    
    $(bar).css('width', result + 'px')
    $(bar).css('background-color', 'rgb(' + metricValues[i].backgroundColor + ')')
    var backgroundColor = '0px 2px 4px rgba(' + metricValues[i].backgroundColor + ', 0.4)'

    $(bar).css('box-shadow', backgroundColor)
  })
});