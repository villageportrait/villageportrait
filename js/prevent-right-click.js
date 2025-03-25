// Prevent right-clicking on the website
document.addEventListener('DOMContentLoaded', () => {
    // Disable right-click context menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
    
    // Disable keyboard shortcuts that could be used to save content
    document.addEventListener('keydown', (e) => {
        // Prevent Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12
        if (
            (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) || 
            (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) ||
            e.key === 'F12'
        ) {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable drag and drop for images
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
});
