$(function() {
  $(document).on('click', function(e) {
    closeModal(e)
  })

  /* Intersection observer */
  var heroRight = document.querySelector('.hero .hero__right')
  var heroLeft = document.querySelector('.hero .hero__left')
  console.log(heroRight)

  var options = {
    threshold: 0.75
  }

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden')
      }
    })
  }, options)

  observer.observe(heroRight)
  observer.observe(heroLeft)

  /* Nav links */
  $('.js-navbar-link').on('click', function(e) {
    e.preventDefault()
    var id = $(this).attr('href').slice(1)
    console.log(id)
    document.querySelector('#' + id).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  })

  /* Hamburger animation */
  $('.js-hamburger-open').on('click', openModal)
  $('.js-hamburger-close').on('click', closeModal)

  function openModal(e) {
    e.stopPropagation();
    $('.js-hamburger-open').addClass('hidden')
    $('.js-hamburger-close').removeClass('hidden')
    $('.js-mobile-menu').addClass('open')
  }

  function closeModal(e) {
    e.stopPropagation();
    $('.js-hamburger-close').addClass('hidden')
    $('.js-hamburger-open').removeClass('hidden')
    $('.js-mobile-menu').removeClass('open')
  }


  var progressValues = {
    value: 827,
    max: 1000
  }

  var percentage = progressValues.value / progressValues.max

  var calculatedWidth = (percentage * 80)

  var progress = $('.js-progress')
  progress.css('width', calculatedWidth)

  
  /* Like card */
  $('.js-like-card-active-range').css('width', ($('.js-like-card-range').attr('value') / 10) + '%')
  $('.js-like-card-amount').text($('.js-like-card-range').attr('value'))
  $('.js-like-card-range').on('input', function(e) {
    $('.js-like-card-amount').text(e.target.value)
    var calculatedWidth = e.target.value / 10
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