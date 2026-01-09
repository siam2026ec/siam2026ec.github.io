async function loadComponent(targetId, filePath) {
  const container = document.getElementById(targetId);
  if (!container) return;

  try {
    const res = await fetch(filePath);
    const html = await res.text();
    container.innerHTML = html;
  } catch (err) {
    console.error(`Error al cargar ${filePath}:`, err);
  }
}

async function init() {
  // 1) Cargar componentes
  await Promise.all([
    loadComponent('navbar', 'components/navbar.html'),
    loadComponent('hero', 'components/hero.html'),
    loadComponent('about', 'components/about.html'),
    loadComponent('committee', 'components/committee.html'),
    loadComponent('event', 'components/event.html'),
    loadComponent('speakers', 'components/speakers.html'),
    loadComponent('register', 'components/register.html'),
    loadComponent('challenge', 'components/challenge.html'),
    loadComponent('faq', 'components/faq.html'),
    loadComponent('schedule', 'components/schedule.html'),
    loadComponent('location', 'components/location.html'),
    loadComponent('sponsors', 'components/sponsors.html'),
    loadComponent('contact', 'components/contact.html'),
    loadComponent('footer', 'components/footer.html'),
  ]);

  // 2) Inicializar AOS (solo para animación de entrada)
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true, // una sola vez para simplificar
    });
  }

  // 3) Inicializar menú móvil
  const menuBtn = document.querySelector('#menuBtn');
  const mobileMenu = document.querySelector('#mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú al hacer click en una opción
    mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', init);
