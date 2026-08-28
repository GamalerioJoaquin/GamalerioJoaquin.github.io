(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  const links = [...document.querySelectorAll('.nav-links > a')];
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const year = document.querySelector('[data-year]');
  const portrait = document.querySelector('.portrait');
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  const originalTitle = document.title;
  const originalDescription = descriptionMeta?.content || '';
  const originalOgDescription = ogDescriptionMeta?.content || '';
  const originalOgTitle = ogTitleMeta?.content || '';
  const originalElements = new Map();

  const remember = (element, includeHtml = false) => {
    if (!element) return null;
    if (!originalElements.has(element)) {
      originalElements.set(element, {
        html: null,
        attributes: new Map()
      });
    }
    const state = originalElements.get(element);
    if (includeHtml && state.html === null) state.html = element.innerHTML;
    return state;
  };

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (!element) return;
    remember(element, true);
    element.textContent = value;
  };

  const setHtml = (selector, value) => {
    const element = document.querySelector(selector);
    if (!element) return;
    remember(element, true);
    element.innerHTML = value;
  };

  const setTexts = (selector, values) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (values[index] === undefined) return;
      remember(element, true);
      element.textContent = values[index];
    });
  };

  const setAttribute = (selector, attribute, value) => {
    const element = document.querySelector(selector);
    if (!element) return;
    const state = remember(element);
    if (!state.attributes.has(attribute)) {
      state.attributes.set(attribute, element.getAttribute(attribute));
    }
    element.setAttribute(attribute, value);
  };

  const restoreEnglish = () => {
    originalElements.forEach((state, element) => {
      if (state.html !== null) element.innerHTML = state.html;
      state.attributes.forEach((value, attribute) => {
        if (value === null) element.removeAttribute(attribute);
        else element.setAttribute(attribute, value);
      });
    });
    document.title = originalTitle;
    if (descriptionMeta) descriptionMeta.content = originalDescription;
    if (ogDescriptionMeta) ogDescriptionMeta.content = originalOgDescription;
    if (ogTitleMeta) ogTitleMeta.content = originalOgTitle;
  };

  const applySpanish = () => {
    document.title = 'Joaquin Ignacio Gamalerio — Ingeniero de machine learning · Científico de datos · Visión por computadora';
    if (descriptionMeta) {
      descriptionMeta.content = 'Ingeniero de machine learning y científico de datos que desarrolla soluciones basadas en datos, con experiencia en modelado, análisis, visión por computadora, biometría y software de producción.';
    }
    if (ogDescriptionMeta) ogDescriptionMeta.content = descriptionMeta?.content || '';
    if (ogTitleMeta) ogTitleMeta.content = document.title;

    setText('.skip-link', 'Saltar al contenido');
    setAttribute('.nav', 'aria-label', 'Navegación principal');
    setAttribute('.brand', 'aria-label', 'Joaquin Gamalerio, inicio');
    setText('.nav-toggle .sr-only', 'Alternar navegación');
    setTexts('.nav-links > a', ['Experiencia', 'Proyectos', 'Formación', 'Contacto']);
    setAttribute('.language-switcher', 'aria-label', 'Idioma');

    setHtml('.eyebrow', '<span class="status-dot" aria-hidden="true"></span> Argentina · Disponible para oportunidades globales');
    setHtml('.hero-copy h1', '<span>Ingeniero de machine learning</span><small>Científico de datos · Visión por computadora</small>');
    setText('.hero-lede', 'Licenciado en Física que desarrolla soluciones basadas en datos mediante machine learning y ciencia de datos, con experiencia en desarrollo de modelos, análisis de datos, visión por computadora, seguridad biométrica y software de producción.');
    setTexts('.hero-actions .button', ['Explorar trabajos seleccionados', 'Contactarme']);
    setAttribute('.hero-links', 'aria-label', 'Perfiles profesionales');
    setAttribute('.hero-panel', 'aria-label', 'Resumen del perfil profesional');
    setAttribute('.portrait', 'alt', 'Retrato de Joaquin Ignacio Gamalerio');
    setText('.signal-label', 'Enfoque actual');
    setText('.signal-value', 'Inteligencia visual robusta');
    setAttribute('.signal-tags', 'aria-label', 'Especialidades');
    setTexts('.signal-tags li', ['Detección de suplantación facial', 'Seguridad biométrica', 'Aprendizaje profundo', 'IA aplicada']);

    setAttribute('.proof-strip', 'aria-label', 'Aspectos destacados del perfil');
    setTexts('.proof-grid span', [
      'Experiencia profesional en software',
      'Investigación y experimentación con modelos',
      'Inglés profesional · Español nativo'
    ]);

    setText('#work .section-index', '01 / Experiencia');
    setHtml('#work .section-heading h2', 'Del comportamiento de los modelos<br>a los sistemas de producción.');
    setTexts('.experience-meta p', ['PROD-SOFTWARE', 'Argentina', 'Jul 2024 — Actualidad']);
    setText('.experience-title-row h3', 'Ingeniería de Machine Learning / Desarrollo de software');
    setText('.experience-title-row .pill', 'Actual');
    setText('.experience-summary', 'Trabajo interdisciplinario en IA aplicada, validación biométrica, desarrollo de aplicaciones y emulación y pruebas de infraestructura en la nube.');
    setTexts('.impact-list li', [
      'Entrené y evalué modelos de aprendizaje profundo para detección de suplantación facial y ataques de presentación.',
      'Investigué casos de fallo y comportamiento de modelos para contribuir a decisiones biométricas más confiables.',
      'Contribuí a componentes biométricos y de validación de credenciales en sistemas backend y frontend.',
      'Utilicé Python para experimentación de aprendizaje automático y Kotlin/Java para desarrollo de aplicaciones de producción.',
      'Trabajé con SQL, Git, Linux, Terraform, LocalStack, flujos orientados a AWS y arquitectura MVVM.'
    ]);

    setText('#projects .section-index', '02 / Proyectos seleccionados');
    setHtml('#projects .section-heading h2', 'Profundidad técnica,<br>hecha visible.');
    setText('#projects .section-note', 'Una selección que abarca biometría profesional, investigación en aprendizaje profundo y aprendizaje automático científico.');
    setTexts('.project-kicker', [
      'Profesional · Visión por computadora',
      'Tesis de investigación · Aprendizaje profundo',
      'ML científico · Clasificación'
    ]);
    setTexts('.project-copy h3', [
      'Detección de suplantación facial y seguridad biométrica',
      'BoostDropout: Dilución estructurada en redes neuronales',
      'Clasificación morfológica de galaxias'
    ]);
    setTexts('.project-copy > p:not(.project-kicker):not(.confidential-note)', [
      'Entrenamiento, evaluación y análisis de casos de fallo en sistemas biométricos diseñados para distinguir usuarios genuinos de ataques de presentación. El trabajo conectó la experimentación con aprendizaje profundo con restricciones reales de aplicación y flujos de validación.',
      'Diseñé y evalué una estrategia de regularización para redes neuronales feed-forward, implementada en PyTorch y comparada experimentalmente con Dropout y DropConnect sobre MNIST.',
      'Exploré la morfología de galaxias mediante propiedades físicas y apariencia visual, combinando preparación de datos, análisis exploratorio, reducción de dimensionalidad y clasificación con aprendizaje automático.'
    ]);
    document.querySelectorAll('.tag-list').forEach((element) => {
      const state = remember(element);
      if (!state.attributes.has('aria-label')) {
        state.attributes.set('aria-label', element.getAttribute('aria-label'));
      }
      element.setAttribute('aria-label', 'Tecnologías utilizadas');
    });
    setTexts('.project-card:nth-child(1) .tag-list li', ['PyTorch', 'Python', 'Visión por computadora', 'PAD', 'Validación de modelos']);
    setTexts('.project-card:nth-child(2) .tag-list li', ['PyTorch', 'Redes neuronales', 'Regularización', 'Evaluación comparativa']);
    setTexts('.project-card:nth-child(3) .tag-list li', ['Python', 'scikit-learn', 'pandas', 'Astronomía']);
    setText('.confidential-note', 'Algunos detalles de implementación son confidenciales.');
    setHtml('.project-card:nth-child(2) .text-link', 'Ver implementación relacionada <span aria-hidden="true">↗</span>');
    setHtml('.project-card:nth-child(3) .text-link', 'Ver repositorio <span aria-hidden="true">↗</span>');
    setAttribute('.visual-boostdropout img', 'alt', 'Diagrama de regularización de una red neuronal con BoostDropout');
    setAttribute('.visual-galaxy img', 'alt', 'Visualización multicanal de una galaxia utilizada para clasificación morfológica');
    setAttribute('.visual-biometric img', 'alt', 'Grilla de landmarks faciales utilizada para análisis biométrico');
    setText('#background .section-index', '03 / Formación');
    setHtml('#background .section-heading h2', 'Formación científica.<br>Ejecución de ingeniería.');
    setTexts('.background-card > .card-label', ['Educación', 'Herramientas principales']);
    setTexts('.education-card .timeline-item h3', ['Licenciado en Física', 'Diplomatura en Ciencia de Datos, Aprendizaje Automático y sus Aplicaciones', 'AWS Academy Graduate - Machine Learning Foundations']);
    setText('.education-card .timeline-item > div:last-child > p:not(.institution)', 'Carrera de cinco años orientada a la investigación, con formación avanzada y una tesis supervisada.');
    setTexts('.skill-group h3', ['Machine Learning y Ciencia de datos', 'Visión por computadora y biometría', 'Software e infraestructura']);
    setTexts('.skill-group p', [
      'PyTorch · scikit-learn · pandas · NumPy · Entrenamiento y evaluación de modelos · Ingeniería de características · Análisis exploratorio · Validación de datos',
      'Detección de suplantación facial · Detección de ataques de presentación · Landmarks faciales · Nubes de puntos · Clasificación de imágenes',
      'Python · Kotlin · Java · SQL · Git · Linux · Terraform · LocalStack · AWS · MVVM'
    ]);
    setText('.teaching-note .card-label', 'Comunicación');
    setText('.teaching-note > p:last-child', 'Experiencia previa como tutor universitario y profesor particular de física y matemática: una base para explicar ideas técnicas con claridad y trabajar entre disciplinas.');

    setText('#contact .section-index', '04 / Contacto');
    setHtml('#contact h2', 'Construyamos sistemas<br>en los que se pueda confiar.');
    setText('.contact-copy > p', 'Me interesan roles y colaboraciones en IA aplicada, visión por computadora, seguridad biométrica, aprendizaje profundo y desarrollo de software orientado a la investigación.');
    setText('.footer-inner > p:last-child', 'Física · IA · Ingeniería');
  };

  const applyLanguage = (language) => {
    restoreEnglish();
    if (language === 'es') applySpanish();
    document.documentElement.lang = language;
    languageButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      // Local storage can be unavailable in privacy-focused browsing modes.
    }
  };

  const setHeaderState = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  const closeMenu = () => {
    navLinks?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  };

  toggle?.addEventListener('click', () => {
    const open = navLinks?.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(Boolean(open)));
  });

  links.forEach((link) => link.addEventListener('click', closeMenu));
  languageButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language || 'en'));
  });
  window.addEventListener('scroll', setHeaderState, { passive: true });
  setHeaderState();

  if (year) year.textContent = String(new Date().getFullYear());

  portrait?.addEventListener('error', () => {
    portrait.style.display = 'none';
  });

  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
  }

  let initialLanguage = 'en';
  try {
    initialLanguage = localStorage.getItem('portfolio-language') || 'en';
  } catch {
    initialLanguage = 'en';
  }
  applyLanguage(initialLanguage === 'es' ? 'es' : 'en');
})();
