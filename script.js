// Toggle dark mode
document.getElementById("darkToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Load section dynamically
function loadPage(section) {
  fetch(`${section}.html`)
    .then(response => {
      if (!response.ok) throw new Error("Page not found.");
      return response.text();
    })
    .then(data => {
      document.getElementById("main-content").innerHTML = data;
    })
    .catch(error => {
      document.getElementById("main-content").innerHTML = `<p>${error}</p>`;
    });
}

// Load Home by default
window.onload = function () {
  loadPage("home");
};
