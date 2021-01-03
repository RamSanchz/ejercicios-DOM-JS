const d = document,
  w = window,
  n = navigator;

export default function networksStatus() {
  const isOnline = () => {
    const $div = d.createElement("div"); //cremos un div donde mostraremos el estado de la coneccion
    if (n.onLine) {
      //navigator.online nos devuelve un boolean
      $div.textContent = "Conexión Reestablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexión Perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin", $div); //solo faltaba agregar el div a nuestro body, afterbegin es el primero de sus hijos ahi es donde lo colocara
    setTimeout(() => {
      d.body.removeChild($div); // este setTimeout es para que pasados 2 segundos se remueva el div agregado y no quede tapado el contenido
    }, 2000);
  };
  //online y offline son eventos que ya trae nuestro objeto window y que reaccionan a cada uno de los hechos (cuando hay un cambio en la red)
  w.addEventListener("online", (e) => isOnline()); //cuando tenga coneccion mandara a llamar a la funcion
  w.addEventListener("offline", (e) => isOnline()); //cuando la pierda la mandara a llamar
}
