$(function() {
  /* Modal window */
	$('.js-modal-trigger').on('click', function(e) {
    $(this).siblings('.modal__window').addClass('is-visible')
  });

  $('.js-modal-close').on('click', function(e) {
    $('.modal__window').removeClass('is-visible')
  });

  var hamburgerToggler = false
  /* Hamburger animation */
  $('.js-hamburger').on('click', function(e) {
    $('.navbar__toggle-icon').toggleClass('active')
    if (!$(this).prop('checked')) {
      setTimeout(function() {
        $('.navbar__menu').css('display', 'none')
      }, 200)
    }
  })

  /* Dropdown animation */
  /* Hover */
  $('.js-dropdown__click-trigger').on('click', function(e) {
    $(this).find('.dropdown').toggleClass('active')
  })
});


/* $('.modal__window').removeClass('is-visible'); */