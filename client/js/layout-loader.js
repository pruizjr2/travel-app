// layout-loader.js
function injectPage(callback) {
    fetch('/layout.html')
      .then(res => res.text())
      .then(layoutHTML => {
        // Replace the current document with the layout
        document.open();
        document.write(layoutHTML);
        document.close();
  
        // Once layout is rendered, run your custom page logic
        if (typeof callback === 'function') {
          // Wait for layout to fully load (e.g., nav/footer scripts)
          window.addEventListener('DOMContentLoaded', callback);
        }
      })
      .catch(err => {
        console.error('Error loading layout:', err);
        document.body.innerHTML = `<p>Failed to load layout. Please try again later.</p>`;
      });
  }
  