/* =========================================================
   ZIPPAGE • Aneline Assis — script.js
   JavaScript puro, modular, sem dependências externas
========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initScrollReveal();
  initFaqAccordion();
  initClinicCarousel();
  initFooterYear();
});

/* ---------- Header: encolhe / sombra ao rolar ---------- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Navegação mobile (off-canvas) ---------- */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha o menu ao clicar em qualquer link interno
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  // Fecha o menu com a tecla Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

/* ---------- Scroll Reveal (IntersectionObserver) ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  // Respeita usuários que preferem menos movimento
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Só ativa o "esconder até revelar" depois que o JS confirmou que vai
  // rodar o observer — conteúdo nunca fica invisível por falha de script.
  document.documentElement.classList.add('js-reveal-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- FAQ — Acordeão acessível ---------- */
function initFaqAccordion() {
  const questions = document.querySelectorAll('.faq-item__q');
  if (!questions.length) return;

  questions.forEach((btn) => {
    const answer = btn.nextElementSibling;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Fecha os demais itens (acordeão exclusivo)
      questions.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherBtn.nextElementSibling.style.maxHeight = null;
        }
      });

      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.style.maxHeight = isOpen ? null : `${answer.scrollHeight}px`;
    });
  });
}

/* ---------- Consultório: carrossel de fotos ---------- */
function initClinicCarousel() {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('[data-carousel-track]');
  const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
  const prevBtn = carousel.querySelector('[data-carousel-prev]');
  const nextBtn = carousel.querySelector('[data-carousel-next]');
  const dotsWrap = carousel.querySelector('[data-carousel-dots]');
  if (!track || !slides.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollBehavior = prefersReduced ? 'auto' : 'smooth';

  // Cria os indicadores (dots), um por slide
  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'clinic__dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Ir para foto ${i + 1} de ${slides.length}`);
    dot.addEventListener('click', () => {
      slides[i].scrollIntoView({ behavior: scrollBehavior, inline: 'center', block: 'nearest' });
    });
    dotsWrap.appendChild(dot);
    return dot;
  });

  const setActive = (index) => {
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  };

  // Observa qual slide está mais visível para atualizar o dot ativo
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          setActive(slides.indexOf(entry.target));
        }
      });
    },
    { root: track, threshold: [0.6] }
  );
  slides.forEach((slide) => observer.observe(slide));
  setActive(0);

  const scrollByDirection = (dir) => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0');
    track.scrollBy({ left: dir * (slideWidth + gap), behavior: scrollBehavior });
  };

  prevBtn?.addEventListener('click', () => scrollByDirection(-1));
  nextBtn?.addEventListener('click', () => scrollByDirection(1));

  // Navegação por teclado quando o carrossel está em foco
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollByDirection(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByDirection(-1); }
  });
}

/* ---------- Ano dinâmico no rodapé ---------- */
function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
