function showDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const footerText = document.getElementById('footer-text');
    const deleteBtn = document.getElementById('delete-btn');
    const changeBtn = document.getElementById('change-btn');

    deleteBtn.addEventListener('click', () => {
        footerText.textContent = ''; // Deletes the text
    });

    changeBtn.addEventListener('click', () => {
        footerText.textContent = '© 2024 Gerald. All rights reserved.'; // Changes the text
    });
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const headerText = document.getElementById('header-text');
    const messages = [
        'Welcome to My Portfolio',
        'Explore My Hobbies and Interests',
        'Check Out My Career Goals',
        'Contact Me for More Information'
    ];
    let currentIndex = 0;

    function changeText() {
        currentIndex = (currentIndex + 1) % messages.length;
        headerText.textContent = messages[currentIndex];
    }

    // Change text every 5 seconds
    setInterval(changeText, 5000);
});
