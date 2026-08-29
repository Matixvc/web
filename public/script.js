/* ==========================================================================
   LÓGICA INTERACTIVA GLOBAL & EFECTOS PREMIUM
   Matías Villalobos Cautivo - XR & Software Developer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initActiveNavHighlight();
  initScrollReveal();
  initGlowEffect();
  initToastContainer();
});

/**
 * Resalta automáticamente el enlace de navegación correspondiente a la ruta activa
 */
function initActiveNavHighlight() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Normalización de rutas para despliegues en Vercel
    if (
      (currentPath === '/' && href === '/') ||
      (href !== '/' && currentPath.startsWith(href))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Animación suave de aparición al hacer scroll (Intersection Observer)
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

/**
 * Efecto de iluminación interactiva "Glow" que sigue el puntero del mouse sobre las tarjetas
 */
function initGlowEffect() {
  const cards = document.querySelectorAll('.card-module, .project-card, .profile-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * Genera el contenedor DOM para notificaciones emergentes (Toast)
 */
function initToastContainer() {
  if (!document.getElementById('toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    `;
    document.body.appendChild(container);
  }
}

/**
 * Muestra una notificación emergente estilizada al copiar datos de contacto o realizar acciones
 * @param {string} message - Mensaje a mostrar
 */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.innerText = message;
  toast.style.cssText = `
    background: rgba(10, 12, 16, 0.95);
    color: #00f0ff;
    border: 1px solid rgba(0, 240, 255, 0.4);
    padding: 12px 20px;
    border-radius: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.88rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  `;

  container.appendChild(toast);

  // Animar entrada
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  // Salida y remoción
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/**
 * Copia texto al portapapeles y despliega el Toast interactivo
 */
function copyToClipboard(text, label = 'Dato') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`✓ ${label} copiado al portapapeles`);
  }).catch(err => {
    console.error('Error al copiar:', err);
  });
}