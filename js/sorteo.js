const d = document;

// (btn lo que va ahacer el evento, selector de donde se va a buscar un ganador)
export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector), //obtenemos todos los selectores que vamos a sortear(referencia)
      random = Math.floor(Math.random() * $players.length), //obtenemos el numero aleatorio que ocupara una posicion en el arreglo de nodos, se multiplica por el numero de jugadores para que solo nos de un numero entre esos
      winner = $players[random]; //definimos que el ganador es el que se ubica en el index aleatorio que salio

    // console.log($players, random, winner);
    return `El ganador es: ${winner.textContent} `;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}

// por si se quiere agregar en alguna pagina fuera solo se debe  llamar con el indicador que esta dentro de la pag
/* const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];

  // console.log($players, random, winner);
  return `El ganador es: ${winner.textContent} `;
};

getWinnerComment("selector a elegir ");
 */
