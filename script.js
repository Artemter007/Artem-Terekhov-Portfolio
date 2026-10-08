/* ================= ДАННЫЕ ================= */
const translations = {
  ru: {
    'nav.about': 'Обо мне',
    'nav.skills': 'Навыки',
    'nav.projects': 'Проекты',
    'nav.education': 'Образование',

    'hero.label': 'Портфолио · СПбГУПТД',
    'hero.stat1': 'Технологий',
    'hero.stat2': 'Года обучения',
    'hero.badge': 'Ищу стажировку',
    'hero.firstname': 'АРТЁМ',
    'hero.lastname': 'ТЕРЕХОВ',
    'hero.roleStatic': 'Студент и',
    'hero.desc': 'Учусь в СПбГУПТД на направлении «ИТ-технологии и создание цифрового контента». Верстаю адаптивные сайты, работаю с анимациями и создаю визуальный контент.',
    'hero.cta1': 'Смотреть проекты',
    'hero.cta2': 'Обо мне',

    'about.title': 'Обо мне',
    'about.p1': 'Меня зовут Артём, я учусь в Санкт-Петербургском государственном университете промышленных технологий и дизайна (СПбГУПТД) на направлении «ИТ-технологии и создание цифрового контента».',
    'about.p2': 'Совмещаю техническую и творческую стороны: верстаю адаптивные сайты, работаю с анимациями, создаю визуальный контент. Люблю, когда интерфейс не только работает, но и вызывает эмоции.',
    'about.p3': 'Сейчас активно развиваюсь во frontend-разработке и ищу стажировку или проект, где смогу применить свои навыки. Вне учёбы — волейбол и видеоигры.',
    'about.fact1.num': '2025',
    'about.fact1.label': 'Год поступления',
    'about.fact2.num': '2',
    'about.fact2.label': 'Курс',
    'about.fact3.num': '11',
    'about.fact3.label': 'Навыков в работе',

    'skills.title': 'Навыки',
    'projects.title': 'Проекты',
    'edu.title': 'Образование',

    'footer.tagline': 'Портфолио студента СПбГУПТД',
    'footer.rights': '© 2025 Артём Терехов. Все права защищены.',
    'footer.made': 'Сделано с ❤️ в Санкт-Петербурге'
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.education': 'Education',

    'hero.label': 'Portfolio · SPbSUITD',
    'hero.stat1': 'Technologies',
    'hero.stat2': 'Years of study',
    'hero.badge': 'Looking for internship',
    'hero.firstname': 'ARTEM',
    'hero.lastname': 'TEREKHOV',
    'hero.roleStatic': 'Student &',
    'hero.desc': 'Studying at SPbSUITD, majoring in "IT Technologies and Digital Content Creation". I build responsive websites, work with animations and create visual content.',
    'hero.cta1': 'View projects',
    'hero.cta2': 'About me',

    'about.title': 'About me',
    'about.p1': "My name is Artem. I study at Saint Petersburg State University of Industrial Technologies and Design (SPbSUITD), majoring in 'IT Technologies and Digital Content Creation'.",
    'about.p2': 'I combine technical and creative sides: I build responsive websites, work with animations and create visual content. I love interfaces that not only work but also evoke emotions.',
    'about.p3': "I'm actively growing in frontend development and looking for an internship or project where I can apply my skills. Outside of studies — volleyball and video games.",
    'about.fact1.num': '2025',
    'about.fact1.label': 'Enrolled',
    'about.fact2.num': '2',
    'about.fact2.label': 'Year',
    'about.fact3.num': '11',
    'about.fact3.label': 'Skills in use',

    'skills.title': 'Skills',
    'projects.title': 'Projects',
    'edu.title': 'Education',

    'footer.tagline': 'Portfolio of a SPbSUITD student',
    'footer.rights': '© 2025 Artem Terekhov. All rights reserved.',
    'footer.made': 'Made with ❤️ in Saint Petersburg'
  }
};

const roles = {
  ru: ['Frontend-разработчик', 'Fullstack-разработчик', 'Веб-дизайнер'],
  en: ['Frontend Developer', 'Fullstack Developer', 'Web Designer']
};

const skillsData = [
  { name: { ru: 'HTML5 / CSS3',       en: 'HTML5 / CSS3' },      level: 45 },
  { name: { ru: 'Адаптивная вёрстка', en: 'Responsive Layout' }, level: 40 },
  { name: { ru: 'JavaScript',         en: 'JavaScript' },        level: 35 },
  { name: { ru: 'Figma',              en: 'Figma' },             level: 40 },
  { name: { ru: 'Photoshop',          en: 'Photoshop' },         level: 35 },
  { name: { ru: 'Illustrator',        en: 'Illustrator' },       level: 30 },
  { name: { ru: 'Python',             en: 'Python' },            level: 35 },
  { name: { ru: 'C++',                en: 'C++' },               level: 25 },
  { name: { ru: 'Git / GitHub',       en: 'Git / GitHub' },      level: 35 },
  { name: { ru: 'Premiere Pro',       en: 'Premiere Pro' },      level: 35 },
  { name: { ru: 'After Effects',      en: 'After Effects' },     level: 30 }
];

const projectsData = [
  {
    num: '01',
    title: { ru: 'Портфолио-сайт', en: 'Portfolio Website' },
    desc:  { ru: 'Этот сайт — персональное портфолио с тёмной и светлой темой, мультиязычностью и адаптивной вёрсткой.',
             en: 'This site — a personal portfolio with dark/light theme, multilingual support and responsive layout.' },
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#'
  },
  {
    num: '02',
    title: { ru: 'Учебный лендинг', en: 'Study Landing Page' },
    desc:  { ru: 'Одностраничный сайт с адаптивной вёрсткой, анимациями при скролле и продуманной типографикой. Учебный проект.',
             en: 'One-page website with responsive layout, scroll animations and thoughtful typography. Study project.' },
    tags: ['HTML', 'CSS', 'Адаптив'],
    link: '#'
  }
];

const timelineData = [
  {
    date: '2025 — 2029', dateEn: '2025 — 2029',
    title: { ru: 'СПбГУПТД', en: 'SPbSUITD' },
    subtitle: { ru: 'ИТ-технологии и создание цифрового контента', en: 'IT Technologies & Digital Content Creation' },
    desc: { ru: 'Бакалавриат, 2 курс. Направление готовит специалистов в области веб-разработки, программирования, дизайна и работы с цифровым контентом.',
            en: "Bachelor's degree, 2nd year. The program trains specialists in web development, programming, design and digital content." }
  },
  {
    date: '2025 — 2029', dateEn: '2025 — 2029',
    title: { ru: 'Программа обучения', en: 'Curriculum' },
    subtitle: { ru: 'Дисциплины курса', en: 'Course subjects' },
    desc: { ru: 'В рамках обучения будут изучены: HTML, CSS, JavaScript, Python и C++. Отдельные модули посвящены Figma, Photoshop, Illustrator, Premiere Pro и After Effects.',
            en: 'The curriculum covers: HTML, CSS, JavaScript, Python and C++. Separate modules are dedicated to Figma, Photoshop, Illustrator, Premiere Pro and After Effects.' }
  },
  {
    date: 'В планах', dateEn: 'Planned',
    title: { ru: 'Учебные и личные проекты', en: 'Study & personal projects' },
    subtitle: { ru: 'Практика', en: 'Practice' },
    desc: { ru: 'В планах — вёрстка лендингов, разработка портфолио, работа над макетами и учебными заданиями.',
            en: 'Planned: building landing pages, developing portfolio, working on mockups and study assignments.' }
  }
];

/* ================= СОСТОЯНИЕ ================= */
let currentLang = 'ru';

/* ================= ТЕМА ================= */
function initTheme() {
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', theme);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

/* ================= КУРСОР-ПОДСВЕТКА ================= */
function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  if (!glow) return;

  if (window.matchMedia('(pointer: coarse)').matches) {
    glow.style.display = 'none';
    return;
  }

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x, ty = y;

  window.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
  });

  function loop() {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  loop();
}

/* ================= I18N ================= */
function applyTranslations(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('.lang-toggle__item').forEach(item => {
    item.classList.toggle('is-active', item.dataset.lang === lang);
  });
}

/* ================= ПЕЧАТНЫЙ ТЕКСТ ================= */
let typeTimer = null;
function startTyping(lang) {
  const el = document.getElementById('typed');
  if (!el) return;
  clearTimeout(typeTimer);
  const list = roles[lang];
  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = list[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) { deleting = true; typeTimer = setTimeout(tick, 1600); return; }
      typeTimer = setTimeout(tick, 70);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % list.length;
        typeTimer = setTimeout(tick, 300);
        return;
      }
      typeTimer = setTimeout(tick, 35);
    }
  }
  tick();
}

/* ================= РЕНДЕР: НАВЫКИ (аккордеон) ================= */
function renderSkills(lang) {
  const wrap = document.getElementById('skillsBars');
  if (!wrap) return;
  wrap.innerHTML = '';

  skillsData.forEach(skill => {
    const item = document.createElement('div');
    item.className = 'skill';
    item.innerHTML = `
      <div class="skill__top" role="button" tabindex="0" aria-expanded="false">
        <span>${skill.name[lang]}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill__body">
        <div class="skill__track">
          <div class="skill__fill" data-level="${skill.level}"></div>
        </div>
      </div>
    `;
    wrap.appendChild(item);

    const top = item.querySelector('.skill__top');
    top.addEventListener('click', () => toggleSkill(item));
    top.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSkill(item);
      }
    });
  });

  function toggleSkill(item) {
    const wasOpen = item.classList.contains('is-open');

    wrap.querySelectorAll('.skill').forEach(s => {
      s.classList.remove('is-open');
      s.querySelector('.skill__top').setAttribute('aria-expanded', 'false');
      const f = s.querySelector('.skill__fill');
      if (f) f.style.width = '0';
    });

    if (!wasOpen) {
      item.classList.add('is-open');
      item.querySelector('.skill__top').setAttribute('aria-expanded', 'true');
      const fill = item.querySelector('.skill__fill');
      setTimeout(() => { fill.style.width = fill.dataset.level + '%'; }, 60);
    }
  }
}

/* ================= РЕНДЕР: ПРОЕКТЫ ================= */
function renderProjects(lang) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  projectsData.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.innerHTML = `
      <div class="project-card__num">${p.num}</div>
      <h3>${p.title[lang]}</h3>
      <p>${p.desc[lang]}</p>
      <div class="project-card__tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <a href="${p.link}" class="project-card__link">
        ${lang === 'ru' ? 'Подробнее' : 'Learn more'} <span>→</span>
      </a>
    `;
    grid.appendChild(card);
  });
}

/* ================= РЕНДЕР: ТАЙМЛАЙН ================= */
function renderTimeline(lang) {
  const wrap = document.getElementById('timeline');
  if (!wrap) return;
  wrap.innerHTML = '';
  timelineData.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline__item reveal';
    el.innerHTML = `
      <div class="timeline__date">${lang === 'ru' ? item.date : item.dateEn}</div>
      <div class="timeline__title">${item.title[lang]}</div>
      <div class="timeline__subtitle">${item.subtitle[lang]}</div>
      <div class="timeline__desc">${item.desc[lang]}</div>
    `;
    wrap.appendChild(el);
  });
}

/* ================= REVEAL ================= */
function observeReveal() {
  const els = document.querySelectorAll('.reveal:not(.is-visible)');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), i * 70);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => io.observe(el));
}

/* ================= СМЕНА ЯЗЫКА ================= */
function setLanguage(lang) {
  currentLang = lang;
  applyTranslations(lang);
  renderSkills(lang);
  renderProjects(lang);
  renderTimeline(lang);
  startTyping(lang);
  requestAnimationFrame(observeReveal);
}

/* ================= ХЕДЕР + ВВЕРХ ================= */
function initHeader() {
  const header = document.getElementById('header');
  const toTop = document.getElementById('toTop');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 20);
    toTop.classList.toggle('is-visible', y > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ================= БУРГЕР ================= */
function initBurger() {
  const burger = document.getElementById('burger');
  const list = document.getElementById('navList');
  burger.addEventListener('click', () => {
    const open = list.classList.toggle('is-open');
    burger.classList.toggle('is-active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  list.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      list.classList.remove('is-open');
      burger.classList.remove('is-active');
      document.body.style.overflow = '';
    });
  });
}

/* ================= ПЛАВНЫЙ СКРОЛЛ ================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    });
  });
}

/* ================= ИНИЦИАЛИЗАЦИЯ ================= */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  const saved = localStorage.getItem('lang');
  const browser = (navigator.language || 'ru').slice(0, 2);
  const initial = saved || (browser === 'ru' ? 'ru' : 'en');
  setLanguage(initial);

  document.querySelectorAll('.lang-toggle__item').forEach(item => {
    item.addEventListener('click', () => {
      const lang = item.dataset.lang;
      if (lang === currentLang) return;
      localStorage.setItem('lang', lang);
      setLanguage(lang);
    });
  });

  initHeader();
  initBurger();
  initSmoothScroll();
  initCursorGlow();
  observeReveal();
});