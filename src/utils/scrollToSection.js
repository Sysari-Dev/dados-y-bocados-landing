import { setNavigating } from './navigationState';

const HEADER_OFFSET = 80;
const MIN_DURATION = 320;
const MAX_DURATION = 600;
const DURATION_PER_PIXEL = 0.11;
const NAVIGATION_SETTLE_MS = 150;

let frameId = null;
let navigationId = 0;

const easeOutCubic = (progress) => 1 - (1 - progress) ** 3;

function cancelNavigation() {
  if (frameId !== null) {
    window.cancelAnimationFrame(frameId);
    frameId = null;
  }
  navigationId += 1;
}

function scrollInstantly(top) {
  cancelNavigation();
  window.scrollTo(0, top);
  setNavigating(false);
}

function scrollSmoothly(top) {
  cancelNavigation();

  const currentNavigation = navigationId;
  const start = window.scrollY;
  const distance = top - start;

  if (Math.abs(distance) < 2) {
    scrollInstantly(top);
    return;
  }

  const duration = Math.min(
    MAX_DURATION,
    Math.max(MIN_DURATION, Math.abs(distance) * DURATION_PER_PIXEL)
  );
  const startedAt = performance.now();

  setNavigating(true);

  const step = (now) => {
    if (currentNavigation !== navigationId) return;

    const progress = Math.min(1, (now - startedAt) / duration);
    const nextTop = start + distance * easeOutCubic(progress);

    window.scrollTo(0, Math.round(nextTop));

    if (progress < 1) {
      frameId = window.requestAnimationFrame(step);
    } else {
      frameId = null;
      const settledNavigation = navigationId;
      window.setTimeout(() => {
        if (settledNavigation === navigationId) {
          setNavigating(false);
        }
      }, NAVIGATION_SETTLE_MS);
    }
  };

  frameId = window.requestAnimationFrame(step);
}

export function scrollToSection(event, sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  event.preventDefault();

  const top = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  );

  if (window.location.hash !== `#${sectionId}`) {
    window.history.pushState(null, '', `#${sectionId}`);
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    scrollInstantly(top);
    return;
  }

  scrollSmoothly(top);
}
