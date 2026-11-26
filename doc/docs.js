// Reveal a keyword when following a link into a collapsed reference entry.
function revealLinkedEntry() {
  const identifier = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(identifier);
  if (!target) return;
  let entry = target.closest('details');
  while (entry) {
    entry.open = true;
    entry = entry.parentElement.closest('details');
  }
  target.scrollIntoView({ block: 'start' });
}
window.addEventListener('hashchange', revealLinkedEntry);
window.addEventListener('DOMContentLoaded', revealLinkedEntry);

window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.section-header');
  const updateHeaderHeight = () => {
    document.documentElement.style.setProperty('--section-nav-height', `${header.offsetHeight}px`);
  };
  updateHeaderHeight();
  new ResizeObserver(updateHeaderHeight).observe(header);
});
