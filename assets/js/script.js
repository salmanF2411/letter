/**
 * Blooming Love Letter — Interactive Script
 * PRD Compliant: Envelope animation, keyboard accessibility, state protection, floating petals
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const envelopeBtn = document.getElementById('envelopeBtn');
  const envelope = document.getElementById('envelope');
  const openLetterBtn = document.getElementById('openLetterBtn');
  const closeLetterBtn = document.getElementById('closeLetterBtn');
  const closeLetterXBtn = document.getElementById('closeLetterXBtn');
  const letterOverlay = document.getElementById('letterOverlay');
  const letterModal = document.getElementById('letterModal');
  const petalsContainer = document.getElementById('petalsContainer');

  // State management
  let isOpen = false;
  let isTransitioning = false;

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Open the envelope and reveal the letter
   */
  function openEnvelope() {
    if (isOpen || isTransitioning) return;
    isTransitioning = true;

    // Set aria attributes
    envelopeBtn.setAttribute('aria-expanded', 'true');

    // 1. Trigger envelope open visual state (flap opens, seal hides, peeking letter rises)
    envelope.classList.add('is-open');

    const delayModal = prefersReducedMotion ? 50 : 650;

    // 2. Open full letter overlay after envelope flap has opened
    setTimeout(() => {
      letterOverlay.classList.add('active');
      letterOverlay.setAttribute('aria-hidden', 'false');
      isOpen = true;
      isTransitioning = false;

      // Accessibility: Move focus to the close button inside modal
      if (closeLetterBtn) {
        closeLetterBtn.focus();
      }
    }, delayModal);
  }

  /**
   * Close the letter and return envelope to initial state
   */
  function closeEnvelope() {
    if (!isOpen || isTransitioning) return;
    isTransitioning = true;

    // 1. Hide modal overlay first
    letterOverlay.classList.remove('active');
    letterOverlay.setAttribute('aria-hidden', 'true');

    const delayEnvelope = prefersReducedMotion ? 50 : 350;

    // 2. Fold the envelope back
    setTimeout(() => {
      envelope.classList.remove('is-open');
      envelopeBtn.setAttribute('aria-expanded', 'false');

      const finalizeDelay = prefersReducedMotion ? 50 : 600;
      setTimeout(() => {
        isOpen = false;
        isTransitioning = false;
        // Accessibility: Restore focus to the envelope button
        envelopeBtn.focus();
      }, finalizeDelay);
    }, delayEnvelope);
  }

  // Event Listeners for Opening
  if (envelopeBtn) {
    envelopeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openEnvelope();
    });

    // Keyboard support: Enter / Space on envelope button
    envelopeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openEnvelope();
      }
    });
  }

  if (openLetterBtn) {
    openLetterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openEnvelope();
    });
  }

  // Event Listeners for Closing
  if (closeLetterBtn) {
    closeLetterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeEnvelope();
    });
  }

  if (closeLetterXBtn) {
    closeLetterXBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeEnvelope();
    });
  }

  // Click outside the modal card to close
  if (letterOverlay) {
    letterOverlay.addEventListener('click', (e) => {
      // If clicking the backdrop directly (outside modal card)
      if (e.target === letterOverlay) {
        closeEnvelope();
      }
    });
  }

  // Keyboard support: Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      closeEnvelope();
    }
  });

  /**
   * Floating Petals & Hearts Background Effect (Gentle & Lightweight)
   */
  function initFloatingDecorations() {
    if (prefersReducedMotion || !petalsContainer) return;

    const maxItems = 16;
    const items = ['🌸', '✨', ' petal ', '💕', '🌷', '🤍'];
    
    for (let i = 0; i < maxItems; i++) {
      createParticle(i);
    }

    function createParticle(index) {
      const el = document.createElement('div');
      const isPetal = index % 3 !== 0;

      el.className = isPetal ? 'floating-petal' : 'floating-heart';

      // Random SVG or emoji/shape
      if (isPetal) {
        // Pretty SVG petal
        el.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8 6 4 11 5 16C6 21 12 22 12 22C12 22 18 21 19 16C20 11 16 6 12 2Z" 
                  fill="${index % 2 === 0 ? '#FFD8E7' : '#F4A7C5'}" opacity="0.75" />
          </svg>
        `;
      } else {
        // Mini SVG heart
        el.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#E68FB3" opacity="0.65" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        `;
      }

      // Randomized layout & timing
      const startLeft = Math.random() * 96; // 0 to 96%
      const duration = 12 + Math.random() * 14; // 12s to 26s
      const delay = Math.random() * 15; // 0s to 15s stagger
      const driftX = (Math.random() - 0.5) * 120; // -60px to +60px drift

      el.style.left = `${startLeft}%`;
      el.style.setProperty('--drift-x', `${driftX}px`);
      el.style.animation = `float-petal-up ${duration}s linear ${delay}s infinite`;

      petalsContainer.appendChild(el);
    }
  }

  initFloatingDecorations();
});
