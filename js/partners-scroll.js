const track = document.getElementById('partnersTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentTranslate = 0;

// Ajusta este valor para que el deslizamiento sea más lento visualmente
// Antes estaba en 240, ahora lo reducimos a la mitad para logos duplicados
const scrollStep = 100; 

function moveSlider(direction) {
  // Detener animación automática si existiera
  track.style.animation = 'none';

  // Transición más lenta y suave
  track.style.transition = 'transform 0.1s ease-in-out';

  // Calcular límites
  const trackWidth = track.scrollWidth; // ancho total de todos los logos
  const visibleWidth = track.parentElement.offsetWidth; // ancho del contenedor visible
  const maxTranslate = -(trackWidth - visibleWidth); // límite izquierdo

  // Mover slider según dirección
  if (direction === 'next') {
    currentTranslate -= scrollStep;
    if (currentTranslate < maxTranslate) currentTranslate = maxTranslate;
  } else {
    currentTranslate += scrollStep;
    if (currentTranslate > 0) currentTranslate = 0;
  }

  // Aplicar el movimiento
  track.style.transform = `translateX(${currentTranslate}px)`;

  // Actualizar opacidad de los botones
  updateButtons(maxTranslate);
}

function updateButtons(max) {
  prevBtn.style.opacity = currentTranslate === 0 ? "0.5" : "1";
  nextBtn.style.opacity = currentTranslate <= max ? "0.5" : "1";
}

// Eventos de los botones
nextBtn.addEventListener('click', () => moveSlider('next'));
prevBtn.addEventListener('click', () => moveSlider('prev'));




