/*
  Loads the shared navbar and footer into any page that has
  <div id="navbar-slot"></div> and <div id="footer-slot"></div>.

  IMPORTANT: fetch() only works when the page is served over
  http (e.g. VS Code's "Live Server" extension), not when you
  double-click the HTML file and it opens as file://. Everyone
  on the team should use Live Server (or `npx serve`) instead of
  opening files directly.
*/

function loadPartial(url, slotId) {
  var slot = document.getElementById(slotId);
  if (!slot) return;
  fetch(url)
    .then(function (res) { return res.text(); })
    .then(function (html) { slot.innerHTML = html; })
    .catch(function () {
      console.error('Could not load ' + url + ' — are you running this via Live Server, not file://?');
    });
}

document.addEventListener('DOMContentLoaded', function () {
  loadPartial('components/navbar.html', 'navbar-slot');
  loadPartial('components/footer.html', 'footer-slot');
});
