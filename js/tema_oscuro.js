const d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"); // cuando se quieren seleccionar elementos HTML que tienen un data atributo va entre []

  let moon = "🌙",
    sun = "☀️";

  //creamos funciones de modo oscuro y claro para no escribir codigo de mas
  const ligthMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light"); // le damos el valor del tema actual a la variable local storage
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");//("nombre de la variable a modificar", "nuevo valor")
  };

  d.addEventListener("click", (e) => {
    //console.log($themeBtn.textContent);//textContent sirve para ver que tienen dentro contenido de texto
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        ligthMode();
      }
    }
  });

  //esta funcion se desatara al cargar el documeto
  d.addEventListener("DOMContentLoaded", (e) => {
    //variable localstorage -- localstorage.getItem(obtiene el valor)(),localstorage.setItem(crea o modifica)()
    if (ls.getItem("theme") === null) ls.setItem("theme", "light"); //el metodo de localStorage para obtener una variable de dicho tipo es getIthem("nombre de la variable ls") -- setItem agrega una variable de local storage("nombre de variable", "valor que tendra");
    if (ls.getItem("theme") === "light") ligthMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
