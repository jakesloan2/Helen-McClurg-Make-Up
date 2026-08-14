/* ============================================================
   HELEN McCLURG MAKE UP — shared behaviour
   Loads on every page. Each block checks the element exists
   first, so one file safely serves all five pages.
   ============================================================ */
(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. PRELOADER
     Shows on first visit of a session only. Three separate
     safety nets so it can never get stuck on screen:
       - hides on window load
       - hides after a hard 2.4s timeout regardless
       - hides immediately if anything above throws
  ---------------------------------------------------------- */
  var preload = document.getElementById('preload');
  var hero = document.querySelector('.hero');

  function revealHero() {
    if (hero) requestAnimationFrame(function () { hero.classList.add('is-in'); });
  }

  function dismissPreloader() {
    if (!preload || preload.classList.contains('is-done')) return;
    preload.classList.add('is-done');
    document.body.classList.remove('is-locked');
    revealHero();
    setTimeout(function () {
      if (preload && preload.parentNode) preload.parentNode.removeChild(preload);
    }, 1000);
  }

  if (preload) {
    // Shows every time the homepage is opened, and holds long enough
    // to read. Three safety nets so it can never stick.
    document.body.classList.add('is-locked');
    var MIN_MS = 2600;
    var started = Date.now();

    var finish = function () {
      var waited = Date.now() - started;
      setTimeout(dismissPreloader, Math.max(0, MIN_MS - waited));
    };

    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish);

    setTimeout(dismissPreloader, MIN_MS + 1800);   // hard cap
    setTimeout(dismissPreloader, 6000);            // last resort
  } else {
    revealHero();
  }

  /* ----------------------------------------------------------
     2. IMAGE SLOTS
  ---------------------------------------------------------- */
  var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="4" width="18" height="16"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M3 17l5-4 4 3 3-3 6 5"/></svg>';
  var library = (typeof IMAGES !== 'undefined') ? IMAGES : {};

  var eagerCount = 0;

  Array.prototype.forEach.call(document.querySelectorAll('[data-slot]'), function (node) {
    var key = node.getAttribute('data-slot');
    var ratio = node.getAttribute('data-ratio') || '3/4';
    node.classList.add('slot');
    if (node.hasAttribute('data-dark')) node.classList.add('slot--dark');
    if (ratio !== 'cover') node.style.setProperty('--ar', ratio);

    var entry = library[key];
    var src = (entry && typeof entry === 'object') ? entry.src : entry;

    if (!src) {
      var tag = document.createElement('span');
      tag.className = 'slot__tag';
      tag.innerHTML = ICON + '<span>' + key + '</span>';
      node.appendChild(tag);
      return;
    }

    var img = new Image();
    img.src = src;
    img.alt = (entry.alt) || node.getAttribute('data-alt') || 'Bridal makeup by Helen McClurg';
    img.decoding = 'async';
    if (entry.w) img.width = entry.w;
    if (entry.h) img.height = entry.h;
    if (entry.pos) img.style.objectPosition = entry.pos;

    // The first few images on screen load immediately; the rest wait
    // until they are nearly in view, so the page paints fast.
    var priority = (key === 'hero') || node.hasAttribute('data-eager');
    if (priority) {
      img.loading = 'eager';
      img.setAttribute('fetchpriority', key === 'hero' ? 'high' : 'auto');
    } else if (eagerCount < 3) {
      img.loading = 'eager';
      eagerCount++;
    } else {
      img.loading = 'lazy';
    }

    // fade in rather than snapping from the grey placeholder
    var done = function () { img.classList.add('is-loaded'); };
    if (img.complete) done(); else img.addEventListener('load', done);

    node.appendChild(img);
  });

  /* ----------------------------------------------------------
     3. MENU
  ---------------------------------------------------------- */
  var menu = document.getElementById('menu');
  var openBtn = document.getElementById('menuOpen');
  var closeBtn = document.getElementById('menuClose');

  if (menu && openBtn && closeBtn) {
    var openMenu = function () {
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      openBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('is-locked');
      closeBtn.focus();
    };
    var closeMenu = function () {
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      openBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
      openBtn.focus();
    };
    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
    });

    // mark the current page
    var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    Array.prototype.forEach.call(menu.querySelectorAll('.menu__item'), function (a) {
      if (a.getAttribute('href').toLowerCase() === here) a.setAttribute('aria-current', 'page');
    });
  }

  /* ----------------------------------------------------------
     4. PORTFOLIO CAROUSEL
     Native scroll-snap: the browser handles the physics, so swipe,
     trackpad and arrows all behave the same. JS only tracks which
     slide is centred (for the scale/fade) and drives the arrows.
  ---------------------------------------------------------- */
  var track = document.getElementById('folioTrack');
  if (track) {
    var slides = Array.prototype.slice.call(track.children);
    var countEl = document.getElementById('folioCount');
    var current = 0;

    var pad = function (n) { return n < 10 ? '0' + n : String(n); };

    // which slide is nearest the centre of the viewport strip?
    var measure = function () {
      var mid = track.getBoundingClientRect().left + track.clientWidth / 2;
      var best = 0, bestDist = Infinity;
      slides.forEach(function (s, i) {
        var r = s.getBoundingClientRect();
        var d = Math.abs((r.left + r.width / 2) - mid);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      return best;
    };

    var paint = function () {
      var i = measure();
      if (i !== current) current = i;
      slides.forEach(function (s, n) { s.classList.toggle('is-active', n === current); });
      if (countEl) countEl.textContent = pad(current + 1) + ' / ' + pad(slides.length);
    };

    var scrollTo = function (i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      var slide = slides[i];
      var r = slide.getBoundingClientRect();
      var t = track.getBoundingClientRect();
      var delta = (r.left + r.width / 2) - (t.left + t.clientWidth / 2);
      track.scrollTo({ left: track.scrollLeft + delta, behavior: 'smooth' });
    };

    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { paint(); ticking = false; });
    }, { passive: true });

    var prev = document.getElementById('folioPrev');
    var next = document.getElementById('folioNext');
    if (prev) prev.addEventListener('click', function () { scrollTo(measure() - 1); });
    if (next) next.addEventListener('click', function () { scrollTo(measure() + 1); });

    window.addEventListener('resize', paint);
    window.addEventListener('load', paint);
    paint();
  }

  /* ----------------------------------------------------------
     5. REVIEWS + VENUES
  ---------------------------------------------------------- */
  var ratingEl = document.getElementById('ratingValue');
  if (ratingEl && typeof GOOGLE_RATING !== 'undefined') ratingEl.textContent = GOOGLE_RATING;
  if (typeof GOOGLE_REVIEW_URL !== 'undefined') {
    Array.prototype.forEach.call(document.querySelectorAll('[data-google-link]'), function (a) {
      a.href = GOOGLE_REVIEW_URL;
    });
  }

  var venuesRow = document.getElementById('venuesRow');
  if (venuesRow && typeof VENUES !== 'undefined') {
    venuesRow.innerHTML = VENUES.concat(VENUES).map(function (v) {
      return '<span>' + v + '</span>';
    }).join('');
  }


  /* ----------------------------------------------------------
     5b. TESTIMONIALS + INSTAGRAM
  ---------------------------------------------------------- */
  var quotes = document.getElementById('quotes');
  if (quotes && typeof TESTIMONIALS !== 'undefined') {
    quotes.innerHTML = TESTIMONIALS.map(function (t) {
      var stars = new Array((t.stars || 5) + 1).join('\u2605');
      var paras = t.paras.map(function (p) { return '<p>' + p + '</p>'; }).join('');
      return '<figure class="quote">' +
               '<div class="quote__stars" aria-label="' + (t.stars || 5) + ' out of 5">' + stars + '</div>' +
               '<blockquote class="quote__body">' + paras +
                 '<figcaption class="quote__who">' + t.who +
                   (t.meta ? ' <span>&middot; ' + t.meta + '</span>' : '') +
                 '</figcaption>' +
               '</blockquote>' +
             '</figure>';
    }).join('');
  }

  if (typeof INSTAGRAM_URL !== 'undefined') {
    Array.prototype.forEach.call(document.querySelectorAll('[data-insta]'), function (a) {
      a.href = INSTAGRAM_URL;
      a.target = '_blank';
      a.rel = 'noopener';
      if (!a.getAttribute('aria-label')) a.setAttribute('aria-label', 'Helen McClurg on Instagram');
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-insta-handle]'), function (a) {
      a.href = INSTAGRAM_URL;
      a.target = '_blank';
      a.rel = 'noopener';
      if (typeof INSTAGRAM_HANDLE !== 'undefined') a.textContent = INSTAGRAM_HANDLE;
    });
  }

  /* ----------------------------------------------------------
     6. FAQ
  ---------------------------------------------------------- */
  var faq = document.getElementById('faq');
  if (faq && typeof FAQS !== 'undefined') {
    faq.innerHTML = FAQS.map(function (item, i) {
      var paras = item[1].map(function (p) { return '<p>' + p + '</p>'; }).join('');
      return '<div class="faq__item">' +
               '<button class="faq__q" aria-expanded="false" aria-controls="faq-a-' + i + '">' +
                 '<span>' + item[0] + '</span><span aria-hidden="true">+</span>' +
               '</button>' +
               '<div class="faq__a" id="faq-a-' + i + '"><div>' + paras + '</div></div>' +
             '</div>';
    }).join('');

    Array.prototype.forEach.call(faq.querySelectorAll('.faq__q'), function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.parentElement;
        var panel = item.querySelector('.faq__a');
        var open = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        panel.style.maxHeight = open ? panel.scrollHeight + 'px' : 0;
      });
    });
  }

  /* ----------------------------------------------------------
     7. ENQUIRY FORM
     To make this send: sign up for Formspree (free), then set
     the form's action to your endpoint and remove this block.
  ---------------------------------------------------------- */
  var form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('formStatus');
      if (!form.checkValidity()) {
        if (status) status.textContent = 'Please add your name, email, wedding date, location and party size.';
        form.reportValidity();
        return;
      }
      if (status) status.textContent = 'Thank you — your enquiry is on its way. I\u2019ll reply within 48 hours.';
      form.reset();
    });
  }

  /* ----------------------------------------------------------
     8. SCROLL REVEALS
  ---------------------------------------------------------- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible');
            io.unobserve(en.target);
          }
        });
      }, { rootMargin: '0px 0px -12% 0px' });
      Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
    } else {
      Array.prototype.forEach.call(reveals, function (el) { el.classList.add('is-visible'); });
    }
  }

  /* ----------------------------------------------------------
     9. ODDS AND ENDS
  ---------------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var mark = document.getElementById('topMark');
  if (mark && !document.querySelector('.hero')) mark.classList.add('is-shown');
})();
