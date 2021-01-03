const d = document,
  w = window;

export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextarea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance(); /* speechSynthesisUtterance es lo que nos permite usar el narrador del s.o  esta variable guardara la api*/

  // console.log(speechMessage);

  let voices = [];

  // delegamos los eventos
  d.addEventListener("DOMContentLoaded", (e) => {
    // console.log(w.speechSynthesis.getVoices());
    /* para poder obtener todas las voces que reconoce el navegador no se debe hacer a la carga del documento nadamas sino que solo las obtendra al ejecutarse el evento voiceschanged */
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      // console.log(e);
      /* una vez dentro de evento mandamos a llamar todas las voces y las guardamos dentro de nuestra variable voices  */
      voices = w.speechSynthesis.getVoices();

      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} *** ${voice.lang}`;

        $speechSelect.appendChild($option);
      });
      // console.log(voices);
    });
  });
  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      /* speechmessage es una instancia del metodo SpeechSynthesisUtterance() el cual tiene un atributo voice donde se define el tipo de voz que usara, a travez de .find comprobaremos si en el arreglo de voces tenemos una que coincida con la que esta en el select y le damos ese valor*/
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      //le decimos a la otra api speechSynthesis que hable
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
