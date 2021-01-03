const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $sliders = d.querySelectorAll(".slider-slide");

  let i = 0; /* va a servir como contador para que cuando llegue al ultimo slider se pueda regresar o iniciar desde el comienzo */

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault(); /* se previene el comportamiento por defecto para que no se valla hasta arriba el selector ya que tiene el #en el enlace */
      $sliders[i].classList.remove("active");
      i--;
      if (i < 0) {
        i = $sliders.length - 1;
      }
      $sliders[i].classList.add("active");
    }
    if (e.target === $nextBtn) {
      e.preventDefault();
      $sliders[i].classList.remove("active");
      i++;
      if (i >= $sliders.length) {
        i = 0;
      }
      $sliders[i].classList.add("active");
    }
  });
}
