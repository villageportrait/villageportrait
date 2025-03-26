// Code splitting for Village Portrait
// This file loads non-critical JavaScript modules asynchronously

document.addEventListener('DOMContentLoaded', () => {
  // Helper function to load scripts dynamically
  const loadScript = (src, callback) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    
    // Add onload handler if callback is provided
    if (callback) {
      script.onload = callback;
    }
    
    // Add the script to the document
    document.body.appendChild(script);
  };
  
  // Load scripts in order of importance
  
  // First load essential scripts
  loadScript('js/main.js', () => {
    // After main.js is loaded, load the slideshow
    loadScript('js/slideshow.js', () => {
      // After slideshow is loaded, load scroll reveal
      loadScript('js/scroll-reveal.js');
    });
    
    // Load these in parallel with slideshow
    setTimeout(() => {
      loadScript('js/modal.js');
      loadScript('js/parallax.js');
      
      // Load non-critical scripts with a delay
      setTimeout(() => {
        loadScript('js/prevent-right-click.js');
      }, 2000);
    }, 1000);
  });
});
