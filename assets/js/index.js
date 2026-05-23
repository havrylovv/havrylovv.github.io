document.addEventListener('DOMContentLoaded', () => {
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // Close modal on click
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Handle image clicks
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });
});