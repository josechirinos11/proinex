$(document).ready(function () {
  $("#slippry-slider").slippry(
    (defaults = {
      transition: "vertical",
      useCSS: true,
      speed: 3000,
      pause: 1000,
      initSingle: false,
      auto: true,
      preload: "visible",
      pager: false,
    })
  );
});

const fotoDeslizar = document.getElementById("#slippry-slider");
fotoDeslizar.ready(() => {
  fotoDeslizar.slippry(
    (defaults = {
      transition: "vertical",
      useCSS: true,
      speed: 3000,
      pause: 1000,
      initSingle: false,
      auto: true,
      preload: "visible",
      pager: false,
    })
  );
  return fotoDeslizar.innerHTML;
});

$("#slippry-slider").slippry(
  (defaults = {
    transition: "vertical",
    useCSS: true,
    speed: 3000,
    pause: 1000,
    initSingle: false,
    auto: true,
    preload: "visible",
    pager: false,
  })
);
