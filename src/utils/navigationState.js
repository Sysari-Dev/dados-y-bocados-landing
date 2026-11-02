let navigating = false;
const listeners = new Set();

export function setNavigating(value) {
  if (navigating === value) return;
  navigating = value;
  listeners.forEach((listener) => listener());
}

export function subscribeNavigating(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getNavigating() {
  return navigating;
}
