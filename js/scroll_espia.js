const d = document;

export default function scrollSpy() {
  /* esto va a ser lo que vamos a observaar con el observer , recuerda que los data atriibutes al ser llamados en js van dentro de [] */
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  /* los entries son los elementos que estan entrando al foco del viewport  en este caso las 15 entradas*/
  const cb = (entries) => {
    // console.log("Entries", entries);

    /* por cada entrada que tengas haras lo siguiente  (de manera individual)*/
    entries.forEach((entry) => {
      // console.log("Entry", entry);
      const $id = entry.target.getAttribute("id");
      /* a travez de  entry.target.getAttirbute("id") podemos acceder al atributo id de la entrada que en su momento esta siendo obsevada */
      if (entry.isIntersecting) {
        /* isIntersecting es un metodo que devuelve un booblean cunado una seccion ya fue observada devuelve un true y cuando no un false */
        d.querySelector(`a[data-scroll-spy][href="#${$id}"]`).classList.add(
          "active"
        );
        /* seleccionamos al primer elemento de los id con el data atributo y tambien que en el href tengan un # y el id que se obtuvo de la entry, y le agregamos la clase active */
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${$id}"]`).classList.remove(
          "active"
        ); /* cuando de falso se le removera la case */
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    // root significa que  a partir de que propiedad va a tomar el foco por defecto trae el document
    //rootMargin:"-250px",/* son los margenes de el foco que tomara se pone negativo para expandir hacia afuera el margen */
    threshold: [0.5, 0.75] /* en español se llama limites y va de 0 a 1 donde 0 representa el 0 % del contenido y 1 el 100% osea qwue cuando se visualise el 100% es cuando se efectuara el cambio o se hara el observador no antes o se activara , colocandolos dentro de un arreglo es como si colocaras maximos y minimos, cuando ente entre el 50 al 75 % se disparara el observador no antes y no despues*/,
  });
  /* intersection observer es una api que nos permite saber si existe o si hay algo dentro del viewport, recibe 2 parametros (callback, opciones) */

  /* se le aplica un foreach a nuestras secciones y por cada elemento se ejecuta el metodo objerve(el) que colocara un observador al mismo elemento(el) a travez de este foreach se le agrega el observador */
  $sections.forEach((el) => observer.observe(el));
}
