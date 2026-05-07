/* ═══════════════════════════════════════════════════════════
   LumaPost — Main JavaScript
   File: /js/main.js
   ─────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ──────────────────────────────── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Search toggle ─────────────────────────────────────── */
  const searchToggle = document.getElementById('searchToggle');
  const searchBar    = document.getElementById('searchBar');
  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      const hidden = searchBar.classList.toggle('hidden');
      if (!hidden) {
        const input = searchBar.querySelector('input');
        if (input) setTimeout(() => input.focus(), 50);
      }
    });
  }

  /* ── Mobile menu toggle ────────────────────────────────── */
  const menuToggle  = document.getElementById('menuToggle');
  const mobileMenu  = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  /* ── Back to top ───────────────────────────────────────── */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      const show = window.scrollY > 400;
      backToTop.style.opacity = show ? '1' : '0';
      backToTop.style.pointerEvents = show ? 'auto' : 'none';
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Category filter ───────────────────────────────────── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const articleGrid = document.getElementById('articleGrid');
  if (filterBtns.length && articleGrid) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        const cards  = articleGrid.querySelectorAll('.article-card');

        cards.forEach(card => {
          const cat = card.dataset.category || '';
          const show = filter === 'all' || cat === filter;
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          if (show) {
            card.style.display = '';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = '';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => { if (filter !== 'all') card.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  /* ── Intersection Observer — fade-in on scroll ─────────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animate-fade-up');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.article-card, .featured-card, .newsletter-card').forEach(el => {
    io.observe(el);
  });

  /* ── Lazy image loading (native fallback) ──────────────── */
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('loading' in HTMLImageElement.prototype) {
    // Native support — browser handles it
  } else {
    // Polyfill for older browsers
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const img = e.target;
          img.src = img.dataset.src || img.src;
          imgObserver.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => imgObserver.observe(img));
  }

  /* ── Reading progress bar (article pages) ──────────────── */
  const progressBar = document.getElementById('readingProgress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  /* ── Estimated reading time ────────────────────────────── */
  const articleBody = document.querySelector('.article-body');
  const readingTimeEl = document.getElementById('readingTime');
  if (articleBody && readingTimeEl) {
    const words  = articleBody.innerText.trim().split(/\s+/).length;
    const mins   = Math.max(1, Math.ceil(words / 200));
    readingTimeEl.textContent = `${mins} menit baca`;
  }

  /* ── Page navigation buttons ───────────────────────────── */
  // These are handled via href links in the HTML

});

/* ─────────────────────────────────────────────────────────── */
/* Smooth anchor scroll for all #hash links                    */
/* ─────────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
