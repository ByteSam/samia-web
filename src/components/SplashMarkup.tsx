/**
 * Splash SSR — en el HTML desde el primer paint (sin esperar hidratación).
 * Animación 100% CSS. Geometría de muesca = Logo.tsx.
 */
export default function SplashMarkup() {
  return (
    <div
      id="afynova-splash"
      className="splash-screen splash-overlay"
      aria-hidden="true"
      role="presentation"
    >
      {/* Estrellas de fondo */}
      <span className="splash-stars" aria-hidden>
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </span>
      <div className="splash-stage">
        <div className="splash-formation" aria-hidden>
          <span className="splash-glow" />
          <span className="splash-corona" />
          <div className="splash-eclipse">
            <span className="splash-sun" />
            <span className="splash-moon" />
          </div>
        </div>
        <p className="splash-wordmark">AFYNOVA</p>
      </div>
    </div>
  );
}
