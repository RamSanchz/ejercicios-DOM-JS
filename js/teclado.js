const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(), //este metodo nos permite obtener que tan lejos estan los objetos de las dimensiones de algo
    limitStage = $stage.getBoundingClientRect(); //funciona como un plano cartesiano para hacer coliciones
  /*
  console.log(e.keyCode);
  console.log(e.key);
  console.log(limitsBall);
  console.log(limitStage);
  */

  switch (e.keyCode) {
    case 37:
      //move("left");
      if (limitsBall.left > limitStage.left + 10) {
        x--;
        // se les coloca a cada letra para que soo se prevenga este comportamiento por default y no el de todo el de la computadora
        e.preventDefault();
      }
      break;
    case 38:
      if (limitsBall.top > limitStage.top + 10) {
        y--; // se le coloco -- para mover hacia arriva ya que a diferencia del plano cartesiano la parte negativa de y esta rriba
        // move("up");
        e.preventDefault();
      }
      break;
    case 39:
      if (limitsBall.right < limitStage.right - 10) {
        x++;
        //move("right");
        e.preventDefault();
      }
      break;
    case 40:
      if (limitsBall.bottom < limitStage.bottom - 10) {
        y++;
        //move("down");
        e.preventDefault(); // se les coloca para prevenir el default ya que las teclas de subir tambien controlan el scroll por defecto
      }
      break;
    default:
      break;
  }

  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`; //translate sirve para cambiar de posicion un objeto, recibe 2 parametros(x, y) y lo multiplicamos por 10 para que no se vea tan lento el movimiento
}

export function shortcuts(e) {
  /*console.log(e.type); // muestra el tipo de evento que es
  console.log(e.key); // muestra el valor de la tecla (letras o numeros del teclado)
  console.log(e.keyCode); // el valor que la computadora le da a cada tecla(numeros especiales que da la pc)
  console.log(e.ctrlKey); // estas 3 definen teclas especiales para saber si se estan precionando estas teclas como ctrl,alt,shift
  console.log(e.altKey); //arrojan boolean si se precionan
  console.log(e.shiftKey);
  console.log(e);*/

  //agregamos un shortcut a la combinacion alt + a
  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado.");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmación con el teclado.");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un aviso con el teclado.");
  }
}
