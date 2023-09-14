// JavaScript code to handle the "Download CV" button click event
document.addEventListener('DOMContentLoaded', function () {
    // Find the "Download CV" button by its class name
    const downloadButton = document.querySelector('.btn-secondary');

    // Add a click event listener to the button
    downloadButton.addEventListener('click', function () {
        // Replace this with the URL of your CV file
        const cvUrl = 'your-cv-file.pdf';

        // Open the CV file in a new tab or window
        window.open(cvUrl, '_blank');
    });
});
