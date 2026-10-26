/* ====================================================================
   01. BASE DE DATOS DE PROYECTOS
   AQUÍ SE EDITAN LAS TARJETAS DE LA SECCIÓN "TRABAJOS".

   Para agregar un proyecto:
   1. Copia uno de los objetos { ... } de abajo.
   2. Cambia title, description, category, image y link.
   3. Categorías disponibles: "graphic", "social", "web".
   4. Guarda la imagen en la carpeta /images.
   5. Usa video: "images/mi-video.mp4" para animaciones o reels.
      Si no agregas video, la tarjeta usa image.

   NOTA: Las imágenes actuales son placeholders editables, NO trabajos reales.
   ==================================================================== */
const projects = [
  {
    title: 'Creación de logotipos',
    titleEn: 'Logo creation',
    description: 'Marcas, símbolos y propuestas de identidad.',
    descriptionEn: 'Brands, symbols, and visual identity concepts.',
    category: 'graphic',
    image: 'images/logoport.png',
    icon: 'bi-vector-pen',
    link: '' // Pega aquí el enlace a un caso de estudio, Behance o proyecto.
  },
  {
    title: 'Diseño publicitario',
    titleEn: 'Advertising design',
    description: 'Piezas gráficas para comunicación y promoción.',
    descriptionEn: 'Visual assets for communication and promotion.',
    category: 'graphic',
    image: 'images/diseñocorp.png',
    icon: 'bi-palette2',
    link: ''
  },
  {
    title: 'Identidad visual y aplicaciones',
    titleEn: 'Visual identity and applications',
    description: 'Sistemas gráficos y aplicaciones de marca.',
    descriptionEn: 'Brand identity systems and real-world applications.',
    category: 'graphic',
    image: 'images/identidadmarca.png',
    icon: 'bi-grid-3x3-gap',
    link: ''
  },
  {
    title: 'Diseño de publicaciones',
    titleEn: 'Social media posts',
    description: 'Posts, carruseles y contenido para redes sociales.',
    descriptionEn: 'Posts, carousels, and social media content.',
    category: 'social',
    image: 'images/Diseñoredes.png',
    icon: 'bi-images',
    link: ''
  },
  {
    title: 'Stories y campañas',
    titleEn: 'Stories and campaigns',
    description: 'Campañas visuales y formatos verticales.',
    descriptionEn: 'Visual campaigns and vertical formats.',
    category: 'social',
    image: 'images/Historiasdis.png',
    icon: 'bi-phone',
    link: ''
  },
  {
    title: 'Reels y motion graphics',
    titleEn: 'Reels and motion graphics',
    description: 'Contenido audiovisual y piezas animadas.',
    descriptionEn: 'Video content and animated pieces.',
    category: 'social',
    image: 'images/social-placeholder.svg',
    video: 'images/hipoteticamentesubs.mp4',
    icon: 'bi-play-circle',
    link: ''
  },
  {
    title: 'Diseño UX/UI',
    titleEn: 'UX/UI design',
    description: 'Propuestas visuales de interfaces y navegación.',
    descriptionEn: 'Visual proposals for interfaces and navigation.',
    category: 'web',
    image: 'images/uxuidis.png',
    icon: 'bi-window',
    link: ''
  },
  {
    title: 'Desarrollo web',
    titleEn: 'Web development',
    description: 'Sitios responsive desarrollados con tecnologías web.',
    descriptionEn: 'Responsive websites built with web technologies.',
    category: 'web',
    image: 'images/webdis.png',
    icon: 'bi-code-slash',
    link: ''
  }
];

/* 02. ETIQUETAS DE LAS CATEGORÍAS DE TARJETAS */
const categoryNames = {
  graphic: 'Diseño Gráfico',
  social: 'Redes Sociales',
  web: 'UX/UI Front-End'
};

/* 03. TRADUCCIONES / IDIOMAS
   Agrega o edita textos aquí; no necesitas duplicar el HTML.
   Las claves deben coincidir con los atributos data-i18n del index.html.
   El idioma elegido se guarda en localStorage si el navegador lo permite.
   Edita titleEn y descriptionEn en cada proyecto para traducir tarjetas.
*/
const translations = {
  es: {
    'meta.description': 'Portafolio creativo de Alister Portela: diseño gráfico, redes sociales, UX/UI y desarrollo front-end.',
    'meta.title': 'Alister Portela | Portafolio creativo',
    'brand.role': 'Diseño gráfico · UX/UI · Front-End',
    'nav.about': 'Sobre mí', 'nav.work': 'Trabajos', 'nav.contact': 'Contacto',
    'about.eyebrow': '01 / Conoce mi trabajo', 'about.heading': 'SOBRE MÍ',
    'about.hello': 'Hola, soy',
    'about.intro1': 'Soy un creativo enfocado en diseño gráfico, contenido para redes sociales y experiencias digitales. Me gusta convertir ideas en piezas visuales claras, atractivas y funcionales.',
    'about.intro2': 'Además de diseñar interfaces, puedo llevarlas al navegador con herramientas de desarrollo Front-End. Me interesa crear proyectos donde el diseño y la tecnología trabajen juntos.',
    'about.explore': 'Explorar mis trabajos', 'skills.heading': 'Habilidades', 'tools.heading': 'Herramientas y programas',
    'skill.0': 'Diseño gráfico', 'skill.3': 'Motion Graphics', 'skill.4': 'Diseño UX/UI', 'skill.5': 'Diseño responsive', 'skill.6': 'HTML y CSS',
    'work.eyebrow': '02 / Portafolio', 'work.heading': 'TRABAJOS',
    'work.intro': 'Una selección de proyectos de diseño, contenido digital y desarrollo web.',
    'filter.all': 'Todos', 'filter.graphic': 'Diseño Gráfico', 'filter.social': 'Redes Sociales', 'filter.web': 'UX/UI Front-End',
    'contact.eyebrow': '03 / Hablemos', 'contact.heading': 'CONTACTO',
    'contact.invite': '¿Creamos algo juntos?',
    'contact.summary': 'Estoy abierto a colaboraciones, proyectos creativos y nuevas oportunidades profesionales.',
    'contact.email': 'Correo', 'contact.location': 'Ubicación', 'footer.top': 'Volver arriba',
    'menu.open': 'Abrir menú', 'menu.close': 'Cerrar menú',
    'project.view': 'Ver proyecto', 'project.fallback': 'Proyecto', 'project.preview': 'Vista previa:', 'project.video': 'Vídeo de',
    'category.graphic': 'Diseño Gráfico', 'category.social': 'Redes Sociales', 'category.web': 'UX/UI Front-End',
    'nav.aria': 'Navegación principal', 'filter.aria': 'Filtrar trabajos por categoría',
    'skills.aria': 'Habilidades profesionales', 'tools.aria': 'Herramientas y programas',
    'brand.aria': 'Alister Portela, ir a Sobre mí',
    'photo.alt': 'Espacio reservado para una fotografía de Alister Portela'
  },
  en: {
    'meta.description': 'Creative portfolio of Alister Portela: graphic design, social media, UX/UI, and front-end development.',
    'meta.title': 'Alister Portela | Creative Portfolio',
    'brand.role': 'Graphic Design · UX/UI · Front-End',
    'nav.about': 'About', 'nav.work': 'Work', 'nav.contact': 'Contact',
    'about.eyebrow': '01 / Get to know my work', 'about.heading': 'ABOUT ME',
    'about.hello': 'Hi, I’m',
    'about.intro1': 'I’m a creative professional focused on graphic design, social media content, and digital experiences. I enjoy turning ideas into clear, compelling, and functional visuals.',
    'about.intro2': 'Beyond designing interfaces, I can bring them to life in the browser through front-end development. I love creating projects where design and technology work together.',
    'about.explore': 'Explore my work', 'skills.heading': 'Skills', 'tools.heading': 'Tools & software',
    'skill.0': 'Graphic design', 'skill.3': 'Motion graphics', 'skill.4': 'UX/UI design', 'skill.5': 'Responsive design', 'skill.6': 'HTML & CSS',
    'work.eyebrow': '02 / Portfolio', 'work.heading': 'WORK',
    'work.intro': 'A selection of design, digital content, and web development projects.',
    'filter.all': 'All', 'filter.graphic': 'Graphic Design', 'filter.social': 'Social Media', 'filter.web': 'UX/UI Front-End',
    'contact.eyebrow': '03 / Let’s talk', 'contact.heading': 'CONTACT',
    'contact.invite': 'Let’s create something together',
    'contact.summary': 'I’m open to collaborations, creative projects, and new professional opportunities.',
    'contact.email': 'Email', 'contact.location': 'Location', 'footer.top': 'Back to top',
    'menu.open': 'Open menu', 'menu.close': 'Close menu',
    'project.view': 'View project', 'project.fallback': 'Project', 'project.preview': 'Preview:', 'project.video': 'Video of',
    'category.graphic': 'Graphic Design', 'category.social': 'Social Media', 'category.web': 'UX/UI Front-End',
    'nav.aria': 'Main navigation', 'filter.aria': 'Filter work by category',
    'skills.aria': 'Professional skills', 'tools.aria': 'Tools and software',
    'brand.aria': 'Alister Portela, go to About',
    'photo.alt': 'Placeholder for a photograph of Alister Portela'
  }
};
let currentLanguage = 'es';
function t(key) { return translations[currentLanguage][key] ?? key; }
function applyLanguage(language) {
  if (!translations[language]) return;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = t('meta.title');
  document.querySelector('meta[name="description"]').content = t('meta.description');
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelector('.main-nav').setAttribute('aria-label', t('nav.aria'));
  document.querySelector('.brand').setAttribute('aria-label', t('brand.aria'));
  document.querySelector('.filters').setAttribute('aria-label', t('filter.aria'));
  document.querySelector('.skills-list').setAttribute('aria-label', t('skills.aria'));
  document.querySelectorAll('.skills-list')[1].setAttribute('aria-label', t('tools.aria'));
  document.querySelector('.profile-picture img').alt = t('photo.alt');
  document.querySelectorAll('.language-btn').forEach(button => {
    const active = button.dataset.lang === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const mobileOpen = mainNav.classList.contains('is-open');
  menuToggle.setAttribute('aria-label', t(mobileOpen ? 'menu.close' : 'menu.open'));
  // Conservar el filtro activo al cambiar de idioma.
  const selected = document.querySelector('.filter-btn.is-active');
  renderProjects(selected?.dataset.filter || 'all');
  try { localStorage.setItem('alister-portfolio-language', language); } catch (_) {}
}
document.querySelectorAll('.language-btn').forEach(button => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

/* 04. RENDERIZAR TARJETAS: inserta cada proyecto en #projects-grid */
const projectsGrid = document.querySelector('#projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function createProjectCard(project) {
  const article = document.createElement('article');
  article.className = 'project-card';

  const visual = document.createElement('div');
  visual.className = 'project-visual';

  // Icono de respaldo por si todavía no existe la imagen del proyecto.
  const fallback = document.createElement('span');
  fallback.className = 'project-fallback';
  fallback.setAttribute('aria-hidden', 'true');
  const icon = document.createElement('i');
  icon.className = `bi ${project.icon || 'bi-image'}`;
  fallback.appendChild(icon);
  visual.appendChild(fallback);

  if (project.video) {
    // Vídeos cortos: reproducción automática sin sonido, en loop y dentro de la tarjeta.
    const video = document.createElement('video');
    video.src = project.video;
    video.poster = project.image;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'none';
    video.controls = true; // Permite al visitante pausar o reproducir el vídeo.
    video.setAttribute('aria-label', `${t('project.video')} ${currentLanguage === 'en' ? project.titleEn : project.title}`);
    visual.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = `${t('project.preview')} ${currentLanguage === 'en' ? project.titleEn : project.title}`;
    img.loading = 'lazy';
    img.width = 640;
    img.height = 480;
    visual.appendChild(img);
  }

  const badge = document.createElement('span');
  badge.className = 'project-badge';
  badge.textContent = t(`category.${project.category}`) || t('project.fallback');
  visual.appendChild(badge);

  const content = document.createElement('div');
  content.className = 'project-content';
  const title = document.createElement('h3');
  title.textContent = currentLanguage === 'en' ? (project.titleEn || project.title) : project.title;
  const description = document.createElement('p');
  description.textContent = currentLanguage === 'en' ? (project.descriptionEn || project.description) : project.description;
  content.append(title, description);

  if (project.link) {
    // El enlace aparece solo si existe una URL en el objeto del proyecto.
    const link = document.createElement('a');
    link.className = 'project-detail';
    link.href = project.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.append(`${t('project.view')} `);
    const arrow = document.createElement('i');
    arrow.className = 'bi bi-arrow-up-right';
    arrow.setAttribute('aria-hidden', 'true');
    link.appendChild(arrow);
    content.appendChild(link);
  }

  article.append(visual, content);
  return article;
}

function renderProjects(filter = 'all') {
  const selected = projects.filter(project => filter === 'all' || project.category === filter);
  projectsGrid.replaceChildren(...selected.map(createProjectCard));
  observeVideos(); // Reconecta el control de reproducción después de cambiar filtros.
}

/* 04. FILTROS: muestran y ocultan proyectos según la categoría */
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderProjects(button.dataset.filter);
  });
});

/* 05. VIDEOS: reproducir solo los que están a la vista y si el usuario permite movimiento */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let videoObserver;
function observeVideos() {
  if (videoObserver) videoObserver.disconnect();
  const videos = document.querySelectorAll('.project-card video');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
  videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {}); // Algunos navegadores bloquean autoplay.
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.5 });
  videos.forEach(video => videoObserver.observe(video));
}

/* 06. MENÚ MÓVIL: abrir, cerrar y actualizar aria-expanded */
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');
function closeMobileMenu() {
  mainNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', t('menu.open'));
  menuToggle.querySelector('i').className = 'bi bi-list';
}
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
  menuToggle.querySelector('i').className = open ? 'bi bi-x-lg' : 'bi bi-list';
});
navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMobileMenu(); });

/* 07. NAVEGACIÓN ACTIVA: resalta el enlace de la sección visible */
if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('main > section[id]');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-20% 0px -60% 0px' });
  sections.forEach(section => sectionObserver.observe(section));
}

/* 08. APARICIÓN SUTIL DE ELEMENTOS AL HACER SCROLL */
const reveals = document.querySelectorAll('.reveal');
if (!('IntersectionObserver' in window) || reducedMotion.matches) {
  reveals.forEach(el => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => revealObserver.observe(el));
}

/* 09. PIE DE PÁGINA: mantener siempre el año correcto */
document.querySelector('#current-year').textContent = new Date().getFullYear();

/* 10. PRIMERA CARGA: muestra todos los proyectos */
let savedLanguage = 'es';
try { savedLanguage = localStorage.getItem('alister-portfolio-language') || 'es'; } catch (_) {}
applyLanguage(translations[savedLanguage] ? savedLanguage : 'es');
