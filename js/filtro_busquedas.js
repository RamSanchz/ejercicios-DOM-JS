const d = document;

export default function searchFilters(input, selector) {
  //(lo que va a buscar en el input, en donde lo va a buscar referencia dentro del contenido textual)
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      //console.log(e.key);
      //console.log(e.target.value);

      if (e.key === "Escape") e.target.value = "";

      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? //el.textcontent hace referencia al contenido textual dentro de cada una de las card( en este caso es el figacaption)
            el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
