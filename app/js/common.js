$(function() {
  /* Modal window */
	$('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    console.log($(this).siblings()[0])
    $('.modal').toggleClass('is-visible');
  });

  
});
