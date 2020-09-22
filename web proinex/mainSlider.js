const deslizar = () => {
  // libreria para deslizar las fotos inicial
  // slippry
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
};

const getRut = () => {
  console.log("vista del rut");
  const clickBoton = document.getElementById("buscarRut");
  clickBoton.addEventListener("click", () => {
    const rut = document.getElementById("rut").value;
    alert(rut);
  });
};

window.onload = () => {
  deslizar();
  getRut();
};
