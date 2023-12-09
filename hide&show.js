var div = document.getElementById('aboutus__services');

function hideShow(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Toggle the display of the 'aboutus__services' section
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }

    // Scroll to the 'aboutus__services' section
    div.scrollIntoView({ behavior: 'smooth' });
}

// Adding event listener to the button
document.getElementById('toggleButton').addEventListener('click', hideShow);
