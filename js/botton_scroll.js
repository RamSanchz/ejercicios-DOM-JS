const d = document,
  w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop; // usamos un operador de corto circuito || por si algunos navegadores no aceptan uno de los metodos tome el otro
    //console.log(w.pageYOffset, d.documentElement.scrollTop); // estos metodos ya sea desde el window o desde le HTML nos permiten averiguar que tan desplazada esta la barra de navegacion del top

    if (scrollTop > 400) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth", //comportamiento
        top: 0, //valor de top o a donde va a volver
        //left: 0 es para cuando tienes un scroll en x
      });
    }
  });
}
