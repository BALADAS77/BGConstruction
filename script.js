document.addEventListener("DOMContentLoaded", function () {
  lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/animation/bgconst3d.json' // Adjust path as needed
  });
});

window.onload = function () {
  // Declare functions AFTER DOM is loaded
  window.openContact = function () {
    document.getElementById("contactOverlay").style.display = "flex";
  }

  window.closeContact = function () {
    document.getElementById("contactOverlay").style.display = "none";
  }
}

