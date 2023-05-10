document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
      type: 'loop',
      perPage: 1,
      focus: 'center',
      autoplay: true,
      interval: 8000,
      flickMaxPages: 3,
      updateOnMove: true,
      pagination: false,
      throttle: 300
    }).mount();
  });