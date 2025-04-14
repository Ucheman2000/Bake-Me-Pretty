<script>
  document.addEventListener("DOMContentLoaded", function () {
    // When lightbox opens
    document.addEventListener("lightbox:opened", function () {
      // Don't add button again if it's already there
      if (document.getElementById("custom-close")) return;

      var closeBtn = document.createElement("button");
      closeBtn.innerText = "Close";
      closeBtn.style.position = "fixed";
      closeBtn.style.top = "20px";
      closeBtn.style.right = "20px";
      closeBtn.style.zIndex = 9999;
      closeBtn.style.padding = "10px 20px";
      closeBtn.style.background = "#d94f70";
      closeBtn.style.color = "#fff";
      closeBtn.style.border = "none";
      closeBtn.style.borderRadius = "5px";
      closeBtn.style.fontSize = "16px";
      closeBtn.style.cursor = "pointer";
      closeBtn.id = "custom-close";

      closeBtn.onclick = function () {
        // Close the lightbox by simulating a click on the overlay
        var overlay = document.querySelector(".lightboxOverlay");
        if (overlay) {
          overlay.click();
        }
      };

      document.body.appendChild(closeBtn);
    });

    // When lightbox closes, remove the button
    document.addEventListener("lightbox:closed", function () {
      var btn = document.getElementById("custom-close");
      if (btn) btn.remove();
    });
  });
</script>