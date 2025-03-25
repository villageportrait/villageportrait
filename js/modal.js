// Modal functionality for slideshow images
document.addEventListener('DOMContentLoaded', () => {
    // Get the modal elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    
    // Get all slideshow images
    const slideshowImages = document.querySelectorAll('.slide img');
    
    // Add click event to each slideshow image
    slideshowImages.forEach(img => {
        img.addEventListener('click', function(e) {
            // Prevent the click from triggering slideshow navigation
            e.stopPropagation();
            
            // Set the modal image source to the clicked image source
            modalImg.src = this.src;
            
            // Display the modal
            modal.classList.add('show');
            
            // Disable scrolling on the body when modal is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close the modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close the modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        // Only close if clicking the modal background, not the image
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close the modal when pressing the Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Function to close the modal
    function closeModal() {
        modal.classList.remove('show');
        
        // Re-enable scrolling on the body
        document.body.style.overflow = '';
    }
});
