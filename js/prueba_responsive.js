const d = document;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form); // recuerda que el e.target es el objeto que origina el evento
    e.preventDefault(); // los formularios traen una funcion por defecto que es enviar la informacion que contienen se utiliza el prevent para quitarle el evento y asi nos permita realizar lo que deseamos
    //alert("Formulario Enviado");
    tester = window.open(
      $form.direccion.value,
      "tester",
      `innerWidth = ${$form.ancho.value}, innerHeight = ${$form.alto.value}`
    ); // window.open permite abrir una nueva ventana(direccion url, referencia, propiedades: entre ellas estan innweWidth que permite definie el ancho e innerHeight que permite definir el alto)****** podemos acceder a todos los atributos dentro de un formulario a travez de la notacion del . seguido del nombre que tiene cada atributo
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      tester.close(); // el metodo close() de window permite cerrar una ventana emergente
    }
  });
}
