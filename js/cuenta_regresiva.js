const d = document;

export default function countdown(id, limiteDate, finalMessage) {
  const $countDown = d.getElementById(id), //pasamos el selector del div a la varuable
    countdownDate = new Date(limiteDate).getTime(); //con getTime() obtenemos la fecha en milisegundos(la fecha que queremos  saber)
  let coundownTempo = setInterval(() => {
    let now = new Date().getTime(); //si se deja asi obtenemos la fecha actual en milisegundos que es la que ocuparemos para restar
    let limitTime = countdownDate - now, //obtenemos el tiempo que falta entre ambas fechas
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)), //de milisegundos a (1000milisegunos = 1segundo * segundos, minutos, horas,dias), dividimos el tiempo restante entre el indicador que representa los dias
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(
        -2
      ) /*slice sirve para recortar arreglos o cadenas de texto, ahora se dividio entre el que representa las horas*/,
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2), //como solo se requieren minutos
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)) // y este es para los segundos
        .slice(-2);

    $countDown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

    if (limitTime < 0) {
      clearInterval(coundownTempo);
      $countDown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
