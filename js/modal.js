/**
 * Enhanced modal functionality for Village Portrait
 * Includes swipe navigation between images in modal view
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get the modal elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    
    // Get all slideshow images
    const slideshowImages = document.querySelectorAll('.slide img');
    
    // Track current image index in modal
    let currentImageIndex = 0;
    const totalImages = slideshowImages.length;
    
    // Create navigation arrows for modal
    const createModalNavigation = () => {
        // Create container for navigation arrows
        const navContainer = document.createElement('div');
        navContainer.className = 'modal-nav';
        
        // Create previous arrow
        const prevArrow = document.createElement('span');
        prevArrow.className = 'modal-prev';
        prevArrow.innerHTML = '&lt;';
        prevArrow.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateModal(-1);
        });
        
        // Create next arrow
        const nextArrow = document.createElement('span');
        nextArrow.className = 'modal-next';
        nextArrow.innerHTML = '&gt;';
        nextArrow.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateModal(1);
        });
        
        // Add arrows to container
        navContainer.appendChild(prevArrow);
        navContainer.appendChild(nextArrow);
        
        // Add container to modal
        modal.appendChild(navContainer);
    };
    
    // Call function to create navigation
    createModalNavigation();
    
    // Function to navigate between images in modal
    const navigateModal = (direction) => {
        // Calculate new index with wrapping
        currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
        
        // Show loading state
        modal.classList.add('loading');
        
        // Update modal image source
        modalImg.src = slideshowImages[currentImageIndex].src;
        
        // Remove loading state when image is loaded
        modalImg.onload = () => {
            modal.classList.remove('loading');
        };
    };
    
    // Add click event to each slideshow image
    slideshowImages.forEach((img, index) => {
        img.addEventListener('click', function(e) {
            // Prevent the click from triggering slideshow navigation
            e.stopPropagation();
            
            // Update current image index
            currentImageIndex = index;
            
            // Set the modal image source to the clicked image source
            modalImg.src = this.src;
            
            // Display the modal
            modal.classList.add('show');
            
            // Disable scrolling on the body when modal is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Touch event variables
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Add touch event listeners for swipe functionality in modal
    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleModalSwipe();
    }, { passive: true });
    
    // Handle swipe direction in modal
    const handleModalSwipe = () => {
        const swipeThreshold = 50; // Minimum distance required for a swipe
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - go to next image
            navigateModal(1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - go to previous image
            navigateModal(-1);
        }
    };
    
    // Add keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('show')) return;
        
        if (e.key === 'ArrowLeft') {
            navigateModal(-1);
        } else if (e.key === 'ArrowRight') {
            navigateModal(1);
        } else if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Close the modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close the modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        // Only close if clicking the modal background, not the image or navigation
        if (e.target === modal) {
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
