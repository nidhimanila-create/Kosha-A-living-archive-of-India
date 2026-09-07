/*
  Add class="reveal" to any element you want to fade/slide in as
  the user scrolls to it. Works with the .reveal / .is-visible
  CSS already defined in styles.css. No setup needed beyond
  including this script.
*/

document.addEventListener('DOMContentLoaded', function () {
  var targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (el) { observer.observe(el); });
});
