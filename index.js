var slider = new KeenSlider('#my-keen-slider', {
  mode: 'free-snap',
  slides: {
    // origin: 'center',
    perView: 2,
    spacing: 15,
  },
  breakpoints: {
    '(max-width: 980px)': {
      slides: {
        perView: 1,
        spacing: 15,
      },
    },
  },
});

var slider = new KeenSlider('#my-keen-slider1', {
  slides: {
    perView: 1.3,
    spacing: 40,
  },
  breakpoints: {
    '(max-width: 980px)': {
      slides: {
        perView: 1,
        spacing: 10,
      },
    },
  },
});
