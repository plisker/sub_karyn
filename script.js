document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById("title-page").style.opacity = "0";
      document.getElementById("content").classList.remove("hidden");
      setTimeout(function() {
        document.getElementById("title-page").style.display = "none";
      }, 2000); // Adjust the duration as needed
    }, 3000); // Adjust the duration as needed
  });
  