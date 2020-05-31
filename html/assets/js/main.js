!(function($) {

  $(document).ready(function() {
    // Hide search form
    $('#hs-search-form').hide()
    $('#hs-search-form').attr('data-status', 'hidden')

    // Owl carousel
    $('#hs-banner-slider').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    })
    // Owl carousel
    $('#hs-testimonial').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    })


    // show search form
    $('#hs-search-btn').on('click', function() {

      if ($('#hs-search-form').attr('data-status') === 'hidden') {
        $('#hs-search-form').attr('data-status', 'show')
        $('#hs-search-form').show()
      } else if ($('#hs-search-form').attr('data-status') === 'show') {
        $('#hs-search-form').attr('data-status', 'hidden')
        $('#hs-search-form').hide()
      }

    })


  })

})(jQuery)