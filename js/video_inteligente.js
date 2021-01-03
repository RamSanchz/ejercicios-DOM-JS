const d = document,
  w = window;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
      /* el evento visibilitichange nos permite ver si nos encontramos dentro de una seccion o si esta esta visible  (en la misma pestaña o pag)*/
      w.addEventListener("visibilitychange", (e) =>
        /* devuelve un boolean si se encuentra visible */
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  $videos.forEach((el) => observer.observe(el));
}
