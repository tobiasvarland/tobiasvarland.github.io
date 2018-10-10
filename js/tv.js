var TV = {

  /**
   * Dynamically loads portfolio.
   */
  portfolioCount: 5,
  imageContainer: null,
  indicatorContainer: null,
  loadPortfolio: function() {

    // Reference containers.
    TV.imageContainer = $('#portfolio-photo-container');
    TV.indicatorContainer = $('#portfolio-indicator-container');

    // Load first image.
    TV.loadImage(1);

  },

  /**
   * Loads image and calls for next image to be loaded.
   */
  loadImage: function(index) {

    // Add image to gallery, and load next image when finished.
    var path = 'port/' + index + '.jpg';
    var img = $('<img />').addClass('d-block w-100');
    img.on('load', function() {
      var galleryImage = $('<div />').addClass('carousel-item').append(img);
      var indicator = $('<li />').attr('data-target', '#portfolio').attr('data-slide-to', index - 1);
      if (index == 1) {
        galleryImage.addClass('active');
        indicator.addClass('active');
      }
      TV.imageContainer.append(galleryImage);
      TV.indicatorContainer.append(indicator);
      if (index < TV.portfolioCount) {
        TV.loadImage(index + 1);
      }
    });
    img.attr('src', path);

  },

};

$(window).on('load', function() {
  TV.loadPortfolio();
});
// $(function() { console.log('1'); });