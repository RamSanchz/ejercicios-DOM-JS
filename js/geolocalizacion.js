const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true, //por default biene en false pero al activarse a true se le dice al dispositivo que trate de hacer la mejor lectura posible(como si se acelerara el hardware)
      timeout: 5000, //cuanto tiempo va a estar esperando la respuesta
      maximumAge: 0, //para que no se guarden en cache las lecturas(cada que se haga una consulta no tome como referencia la anterior)
    };

  //callback que recibira la geolocalizacion
  const success = (position) => {
    let coords = position.coords; // la posicion es devuelta en un objeto llamado coords
    //console.log(position);
    $id.innerHTML = `<p>Tu posición actual es:</p>
    <ul>
      <li>Lattitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Precisión: <b>${coords.accuracy}</b>metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>`;
    //accuracy es la precision al tomar la lectura| 20z es el zoom que tendra al ingresar al mapa entre menor sea el numero estara mas lejos, el maximo es 20
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.error(`Error !! ${err.code}: ${err.message}`);
  };

  //geolocation.getCurrentPosition es  una metodo que nos permite acceder a la ubicacion actual del ordenador, recibe 3 parametros (una funcion en caso de que se cumpla, una funcion en caso de error, opciones)
  n.geolocation.getCurrentPosition(success, error, options);
  //n.geolocation.watchPosition(succe, error, option) ----- esta arroja la posicion en tiempo real osea que se actualiza con el movimiento
}
