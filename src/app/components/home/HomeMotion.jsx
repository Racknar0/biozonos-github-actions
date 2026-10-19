'use client';

import { useEffect } from 'react';

export default function HomeMotion() {
  useEffect(() => {
    const root = document.getElementById('biozonos-home');
    if (!root) return;

    // Los layouts se conservan al navegar entre páginas de una sección: cuando cambia el
    // contenido de <main> se vuelven a leer los elementos animados.
    function setup() {
      const reveals = [...root.querySelectorAll('[data-reveal]')];
      const parallax = [...root.querySelectorAll('[data-parallax]')];
      const scenes = [...root.querySelectorAll('[data-scroll-scene]')];
      const hero = root.querySelector('[data-hero-scene]');
      const exitScenes = [...root.querySelectorAll('[data-exit-scene]')];
      const catalogScenes = [...root.querySelectorAll('[data-catalog-scene]')];
      const cards = [...root.querySelectorAll('[data-scroll-card]')];
      const surfaces = [...root.querySelectorAll('[data-surface]')];
      const pointerStages = [...root.querySelectorAll('[data-pointer-stage]')];
      const header = document.querySelector('.bz-header');
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
      const originalMotion = root.dataset.motion;
      const originalSurface = header?.getAttribute('data-surface');
      const originallyScrolled = header?.classList.contains('is-scrolled');
      let observer;
      let frame = 0;
      let pointerPosition = null;

      const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

      function resetOffsets() {
        parallax.forEach((element) => element.style.removeProperty('--parallax-y'));
        scenes.forEach((element) => element.style.removeProperty('--scene-progress'));
        hero?.style.removeProperty('--hero-progress');
        hero?.style.removeProperty('--hero-exit');
        exitScenes.forEach(element => element.style.removeProperty('--exit-progress'));
        catalogScenes.forEach(element => element.style.removeProperty('--line-progress'));
        cards.forEach(element => ['--card-progress', '--card-drift', '--card-side'].forEach(name => element.style.removeProperty(name)));
        root.style.removeProperty('--page-progress');
        pointerStages.forEach((element) => {
          element.style.removeProperty('--pointer-x');
          element.style.removeProperty('--pointer-y');
        });
        pointerPosition = null;
      }

      function update() {
        frame = 0;
        const viewportHeight = window.innerHeight;
        root.style.setProperty('--page-progress', clamp(window.scrollY / Math.max(1, document.documentElement.scrollHeight - viewportHeight)).toFixed(4));

        if (header) {
          header.classList.toggle('is-scrolled', window.scrollY > 40);
          const sampleY = Math.max(1, header.getBoundingClientRect().bottom - 1);
          const current = surfaces.findLast((element) => {
            const bounds = element.getBoundingClientRect();
            return bounds.top <= sampleY && bounds.bottom > sampleY;
          });
          header.dataset.surface = current?.dataset.surface === 'light' ? 'light' : 'dark';
        }

        if (reducedMotion.matches) return;

        if (hero) {
          const bounds = hero.getBoundingClientRect();
          const progress = clamp(-bounds.top / Math.max(1, bounds.height - viewportHeight));
          hero.style.setProperty('--hero-progress', progress.toFixed(4));
          hero.style.setProperty('--hero-exit', clamp((progress - .65) / .35).toFixed(4));
        }
        exitScenes.forEach(element => {
          const bounds = element.getBoundingClientRect();
          element.style.setProperty('--exit-progress', clamp(-bounds.top / Math.max(1, bounds.height)).toFixed(4));
        });
        catalogScenes.forEach(element => {
          const bounds = element.getBoundingClientRect();
          element.style.setProperty('--line-progress', clamp((100 - bounds.top) / Math.max(1, bounds.height - viewportHeight + 100)).toFixed(4));
        });
        const columnsByGrid = new Map();
        cards.forEach((element, index) => {
          const bounds = element.getBoundingClientRect();
          if (bounds.top > viewportHeight + 100 || bounds.bottom < -100) return;
          const grid = element.parentElement;
          if (!columnsByGrid.has(grid)) columnsByGrid.set(grid, getComputedStyle(grid).gridTemplateColumns.split(' ').length);
          const column = [...grid.children].indexOf(element) % columnsByGrid.get(grid);
          const progress = clamp((viewportHeight - bounds.top - column * 45) / Math.min(bounds.height * .65, viewportHeight * .6));
          const drift = clamp((viewportHeight / 2 - bounds.top - bounds.height / 2) / ((viewportHeight + bounds.height) / 2), -1, 1);
          element.style.setProperty('--card-progress', progress.toFixed(4));
          element.style.setProperty('--card-drift', (column % 2 ? drift : -drift).toFixed(4));
          element.style.setProperty('--card-side', column % 2 ? '1' : '-1');
        });

        const amplitude = window.innerWidth >= 1024 ? 36 : 12;
        parallax.forEach((element) => {
          const bounds = element.getBoundingClientRect();
          if (bounds.bottom < -100 || bounds.top > viewportHeight + 100) return;
          const distance = (viewportHeight / 2 - bounds.top - bounds.height / 2)
            / ((viewportHeight + bounds.height) / 2);
          element.style.setProperty('--parallax-y', `${(clamp(distance, -1, 1) * amplitude).toFixed(2)}px`);
        });

        scenes.forEach((element) => {
          const bounds = element.getBoundingClientRect();
          const progress = clamp(-bounds.top / Math.max(1, bounds.height - viewportHeight));
          element.style.setProperty('--scene-progress', progress.toFixed(4));
        });

        if (pointerPosition && finePointer.matches) {
          const { element, x, y } = pointerPosition;
          const bounds = element.getBoundingClientRect();
          if (bounds.width && bounds.height) {
            element.style.setProperty('--pointer-x', `${(clamp((x - bounds.left) / bounds.width) * 100).toFixed(2)}%`);
            element.style.setProperty('--pointer-y', `${(clamp((y - bounds.top) / bounds.height) * 100).toFixed(2)}%`);
          }
        }
      }

      function scheduleUpdate() {
        if (!frame) frame = window.requestAnimationFrame(update);
      }

      function configureMotion() {
        observer?.disconnect();
        resetOffsets();

        if (reducedMotion.matches || !('IntersectionObserver' in window)) {
          reveals.forEach((element) => element.classList.add('is-visible'));
        } else {
          observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            });
          }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });

          reveals.forEach((element) => {
            const bounds = element.getBoundingClientRect();
            if (bounds.top < window.innerHeight && bounds.bottom > 0) {
              element.classList.add('is-visible');
            }
            if (!element.classList.contains('is-visible')) observer.observe(element);
          });
        }

        root.dataset.motion = 'ready';
        scheduleUpdate();
      }

      function onPointerMove(event) {
        if (reducedMotion.matches || !finePointer.matches) return;
        pointerPosition = { element: event.currentTarget, x: event.clientX, y: event.clientY };
        scheduleUpdate();
      }

      function onPointerLeave(event) {
        event.currentTarget.style.removeProperty('--pointer-x');
        event.currentTarget.style.removeProperty('--pointer-y');
        pointerPosition = null;
      }

      window.addEventListener('scroll', scheduleUpdate, { passive: true });
      window.addEventListener('resize', scheduleUpdate);
      reducedMotion.addEventListener('change', configureMotion);
      finePointer.addEventListener('change', configureMotion);
      pointerStages.forEach((element) => {
        element.addEventListener('pointermove', onPointerMove, { passive: true });
        element.addEventListener('pointerleave', onPointerLeave);
      });
      configureMotion();

      return () => {
        observer?.disconnect();
        window.cancelAnimationFrame(frame);
        window.removeEventListener('scroll', scheduleUpdate);
        window.removeEventListener('resize', scheduleUpdate);
        reducedMotion.removeEventListener('change', configureMotion);
        finePointer.removeEventListener('change', configureMotion);
        pointerStages.forEach((element) => {
          element.removeEventListener('pointermove', onPointerMove);
          element.removeEventListener('pointerleave', onPointerLeave);
        });
        resetOffsets();
        if (originalMotion === undefined) delete root.dataset.motion;
        else root.dataset.motion = originalMotion;
        if (header) {
          header.classList.toggle('is-scrolled', Boolean(originallyScrolled));
          if (originalSurface === null) header.removeAttribute('data-surface');
          else header.setAttribute('data-surface', originalSurface);
        }
      };
    }

    let teardown = setup();
    let restartTimer;
    const contentObserver = new MutationObserver(() => {
      window.clearTimeout(restartTimer);
      restartTimer = window.setTimeout(() => { teardown(); teardown = setup(); }, 120);
    });
    contentObserver.observe(root.querySelector('main') || root, { childList: true, subtree: true });

    return () => {
      contentObserver.disconnect();
      window.clearTimeout(restartTimer);
      teardown();
    };
  }, []);

  return null;
}
