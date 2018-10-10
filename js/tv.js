var TV = {

  /**
   * Dynamically loads portfolio.
   */
  portfolioCount: 5,
  loadPortfolio: function() {

    // Reference containers.
    var imageContainer = $('#portfolio-photo-container');
    var indicatorContainer = $('#portfolio-indicator-container');

    // Add images.
    var index = null;
    var src = null;
    for (index = 2; index <= TV.portfolioCount; index++) {
      src = 'port/' + index + '.jpg';
      $('<img />').attr('src', src);
      imageContainer.append('<div class="carousel-item"><img class="d-block w-100" src="' + src + '"></div>');
      indicatorContainer.append('<li data-target="#portfolio" data-slide-to="' + (index - 1) + '"></li>');
    }

  },

};

$(function() {
  TV.loadPortfolio();
});