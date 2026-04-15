document.addEventListener('DOMContentLoaded', () => {

  /* ===========================
     TYPED.JS
  =========================== */
  if (typeof Typed !== 'undefined' && document.getElementById('typed-text')) {
    new Typed('#typed-text', {
      strings: [
        'Frontend Developer',
        'React Developer',
        'UI Enthusiast',
        'Problem Solver',
        'Lifelong Learner'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true
    });
  }

  /* ===========================
     SCROLL REVEAL (Intersection Observer)
  =========================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.aosDelay ? parseInt(el.dataset.aosDelay) : 0;
        setTimeout(() => {
          el.classList.add('aos-animate');
        }, delay);
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-aos]').forEach(el => revealObserver.observe(el));

  /* ===========================
     NAVBAR: SCROLL EFFECT
  =========================== */
  const navbar = document.getElementById('navbar');

  const handleNavScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ===========================
     NAVBAR: MOBILE HAMBURGER
  =========================== */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks?.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ===========================
     NAVBAR: ACTIVE LINK ON SCROLL
  =========================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-link:not(.nav-cta)');

  const activateNavLink = () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionBottom = sectionTop + section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinkItems.forEach(l => l.classList.remove('active'));
        link?.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', activateNavLink, { passive: true });

  /* ===========================
     SCROLL TO TOP BUTTON
  =========================== */
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
