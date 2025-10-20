document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Functionality ---
    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.addEventListener('click', () => {
        // In a real app, you would toggle a mobile navigation menu.
        // For this demo, we'll just log a message.
        console.log('Hamburger menu clicked!');
        alert('Menu functionality would be implemented here.');
    });


    // --- Tag Click Functionality ---
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Toggle an 'active' class on click for visual feedback
            tag.classList.toggle('active');
            console.log(`Tag clicked: ${tag.textContent}`);
        });
    });

    // --- Search Functionality ---
    const searchInput = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.search-icon');
    
    const performSearch = () => {
        const query = searchInput.value;
        if (query) {
            console.log(`Searching for: ${query}`);
            alert(`Searching for: ${query}`);
        }
    };

    // Search when enter key is pressed
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Search when search icon is clicked
    searchIcon.addEventListener('click', () => {
        performSearch();
    });

});