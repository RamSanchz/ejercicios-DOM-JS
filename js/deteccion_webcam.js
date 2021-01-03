const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);

  //navigator.mediaDevices.getUserMedia es una funcion que nos permite activar el video y audio de nuestros navegadores
  if (n.mediaDevices.getUserMedia) {
    //recibe 2 parametros dentro de 1 objeto estos son el video y audio , true para que se activen y false para que no se activen
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      //esto a su ves es una promesa la cual devuelve 2 valores
      .then((stream) => {
        //recive la visualizacion de la camara a en partes de un objeto
        console.log(stream);
        $video.srcObject = stream; //es para agregar todo lo que se grabe al src a travez de un objeto ya que ya que el src espera una url en cadena de texto por eso se usa srcObject para recibir la cadena de texto en manera de objeto
        $video.play(); //se usa el metodo play de la etiqueta video ya que de lo contrario solo se tomaria una foto y no se grabaria
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark> Sucedio el siguiente Error !! ${err}</mark></p>`
        );
        console.error(`Sucedio el siguiente Error ${err}`);
      });
  }
}
