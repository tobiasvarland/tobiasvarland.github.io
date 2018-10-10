var TV = {

  /**
   * Dynamically loads portfolio.
   */
  portfolioCount: 64,
  imageContainer: null,
  loadingMessage: null,
  loadPortfolio: function() {

    // Reference containers.
    TV.imageContainer = $('#portfolio-photo-container');
    TV.loadingMessage = $('#portfolio-loading');

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
      if (index == 1) {
        TV.loadingMessage.remove();
        $('#portfolio').removeClass('d-none');
        galleryImage.addClass('active');
      }
      TV.imageContainer.append(galleryImage);
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