$(function() {
  /* Modal window */
	$('.js-modal-trigger').on('click', function(e) {
    $(this).siblings('.modal__window').addClass('is-visible')
  });

  $('.js-modal-close').on('click', function(e) {
    $('.modal__window').removeClass('is-visible')
  });

  /* Hamburger animation */
  $('.js-hamburger').on('click', function(e) {
    $('.navbar__toggle-icon').toggleClass('active')
  })
});


/* $('.modal__window').removeClass('is-visible'); */