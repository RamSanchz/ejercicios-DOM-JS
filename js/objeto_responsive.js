const w = window,
  d = document;

//esta recibira 4 parametros(id del objeto, mediaquery del tamaño , lo que se plasmara en movil, lo que se plasmara en Desktop)
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mq); //matchMedia es la conversion de CSS mediaQuery a JS osea que evaluara que se este cumpliendo la mq

  //la funcion responsive va a recibir el evento de la mq que se encuentra en breakpoint.addListener(responsive);
  const responsive = (e) => {
    if (e.matches) {
      //e.matches arroja un boolean si se cumple o no lo que corresponde a la mq
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
    //console.log("MQ",breakpoint, e.matches);
  };

  breakpoint.addEventListener("change", responsive); //para agregar eventos a las mq es a travez de addEventLisstener change
  responsive(breakpoint); // se debe mandar a llamar la funcion fuera de esta parq eu cuando se cargue el DOMContent aparesca la informacion de lo contrario esta solo apatrecera cuando haya un cambio en las mq(la vartiable que guarda toda la info de la mq)
}
