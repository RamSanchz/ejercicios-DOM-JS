const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString(); // toLocaleTimeString es el que permite imprimir un reloj entendible de la hora actual
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = ``;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;
  const $alarm = d.createElement("audio"); // es necesaria una etiqueta audio HTML para poder acceder al API audio del navegador y reproducir el sonido
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 2000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      $alarm.pause(); // .pause() es un metodo del API audio que sirve para pausar ya que no hay metodo para detener
      $alarm.currentTime = 0; //currentTime = 0 devuelve el audio al minuto 0
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
