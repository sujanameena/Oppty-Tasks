document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('customHamburger').addEventListener('click', function () {
        alert('Hamburger clicked!');
    });
});


// first page video script
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('bgVideo');
    video.play().catch(function () {
    });
});
// js for video speaker button
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('bgVideo');
    const speakerBtn = document.getElementById('speakerToggle');
    const speakerIcon = document.getElementById('speakerIcon');

    if (video && speakerBtn && speakerIcon) {
        speakerBtn.addEventListener('click', function () {
            video.muted = !video.muted;
            speakerIcon.className = video.muted ? 'fa fa-volume-off' : 'fa fa-volume-up';
        });

        video.addEventListener('loadedmetadata', function () {
            speakerIcon.className = video.muted ? 'fa fa-volume-off' : 'fa fa-volume-up';
        });
    }
});
// scroll down button

        document.addEventListener('DOMContentLoaded', function() {
            var btn = document.getElementById('scrollDownBtn');
            btn.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
            });
            });
        });