const d = document;

export default function contactFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]"); // traera todos los input dentrod del formulario que tengan el atributo required

  // console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      /* dentro de la variable pattern vamos a guardar el valor del pattern en nuestros input, en caso de que no lo tenga(nuetro text-area ya que no es valido para este tipo de input va a tomar el data atributo , .dataset es para acceder a la lista de data atributos que podria tener y seleccionamos pattern) */

      // console.log($input, pattern);
      if (pattern && $input.value !== "") {
        // console.log("el input tiene patron");
        let regex = new RegExp(pattern); //creamos una nueva exprecion regular con el valor que trae nuestra variable pattern
        return !regex.exec($input.value) //comparamos que la expresion no coincida con lo que se escribe en el input
          ? d.getElementById($input.name).classList.add("is-active") // si se cumple  que no coincide obtenemos el nombre de nuestro input y el id del span y le agregamos la clase del error activo
          : d.getElementById($input.name).classList.remove("is-active"); //cuando  no se cumple y coincide le quitamos el error
      }
      if (!pattern) {
        // console.log("el input NO tiene patron");
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  /* submit es el evento que procesa los formularios */
  d.addEventListener("submit", (e) => {
    // e.preventDefault(); //se previene el default por que sino procesa los datos del formulario y de momento no estamos trabajando con apirest
    alert("Enviando Formulario");

    const $loader = d.querySelector(".contac-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    /* usamos el set timeout para simular la peticion ya que aun  no sabemos ajax */
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();

      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}
