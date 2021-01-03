const d = document,
  n = navigator,
  ua = n.userAgent;
export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    // se crean 3 objetos y cada uno va a ayudar a travez de validaciones a guardar el valor dependiendo de donde se conecte
    isMobile = {
      android: () => ua.match(/android/i), //en la propiedad android tenemos una arrow function la cual consultara al UAgent y consultara si dentro de este se encuentra la palabra android a travez de la expresion regular
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i), //.match sirve para comparar expresiones regulares
      any: function () {
        //any se hizo con una funcion normal ya que sino el scope e this se iria al padre y no retornaria ninguna funcnon
        return this.android() || this.ios() || this.windows(); // en esta no va a importar que tipo de dispositivo sea sino que mientras sea un mobil va a servir
      },
    },
    //escritorios
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    //navegadores
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edg/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };

  $id.innerHTML = `
  <ul>
    <li>User Agent: <b> ${ua}</b></li>
    <li>Plataforma: <b> ${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b> ${isBrowser.any()}</b></li>
  </ul>
    `;

  // Contenido Excusivo

  if (isBrowser.edge()) {
    $id.innerHTML += `<p><mark>Este Contenido solo se ve en Edge</mark></p>`;
  } else if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este Contenido solo se ve en Chrome</mark></p>`;
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
  }
  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para  Windows</mark></p>`;
  }

  //Redirecciones
  if (isMobile.android()) {
    //location.href sirve para redireccionar
    window.location.href = "https://google.com";
  }
}
