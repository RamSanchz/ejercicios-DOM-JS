import searchFilters from "./filtro_busquedas.js";
import scrollTopButton from "./botton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import networksStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import userDeviceInfo from "./deteteccion_dispositivos.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js"; // asi se importan 2 o mas funciones o variables de un mismo archivo usando destructuracion de datos {}
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarm-clock.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "april 10, 2021 03:00:00",
    "Feliz Cumpleaños Ramiro 😳!!"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube", //primero
    "(min-width: 1024px)",
    `<a href="https://youtu.be/sD9_l3oDOag" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/sD9_l3oDOag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` //el contenido de los iframe va con template y se comento por que manda error desde Youtube
  );
  responsiveMedia(
    //esta se mando llamar 2 veces ya que se realizara una validacion por cada objeto
    "gmaps", //segundo
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/hJ7h65gvLCCXG6hY6" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.7329283840727!2d-96.89016618572661!3d19.553076341885347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db3199ce13ab8f%3A0xf953a6fe1852a1f4!2sCalle%20Dos%209%2C%20Huizachal%2C%2091180%20Xalapa-Enr%C3%ADquez%2C%20Ver.!5e0!3m2!1ses-419!2smx!4v1606277482157!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  //keydown desencadena el evento cuando se preciona una tecla del teclado
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
/*
d.addEventListener("keyup", e =>{//keyup desencadena el evento cuando se suelta una tecla del teclado
  shortcuts(e);
})
d.addEventListener("keypress", e =>{//keypress desencadena el evento mientras se mantiene precionada una tecla del teclado
  shortcuts(e);
})
*/
darkTheme(".dark-theme-btn", "dark-mode"); // esta funcion se saco del DOMContentLoaded ya que internamente tiene otro igual y no se ejecutara el de dentro de la funcion en caso de dejarlo asi
networksStatus();
speechReader();
