var TV = {

  /**
   * Dynamically loads portfolio.
   */
  loadPortfolio: function() {
    var folder = 'port/';
    $.ajax({
      url: folder,
      success: function(data) {
        console.log(data);
      }
    });
  },

  /**
   * Adds images to portfolio.
   */
  buildPortfolio: function() {

    // Reference containers.
    var imageContainer = $('#portfolio-photo-container');
    var indicatorContainer = $('#portfolio-indicator-container');

    // Add images.
    $('link[rel="preload"]').each(function(index) {
      var src = $(this).attr('href');
      imageContainer.append('<div class="carousel-item"><img class="d-block w-100" src="' + src + '"></div>');
      indicatorContainer.append('<li data-target="#portfolio" data-slide-to="' + (index + 1) + '"></li>');
    });

  }

};

$(function() {
  TV.buildPortfolio();
  TV.loadPortfolio();
});