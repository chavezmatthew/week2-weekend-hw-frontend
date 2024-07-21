function showVideo(url) {
    var videoOverlay = document.getElementById('video-overlay');
    var videoFrame = document.getElementById('overlay-video-frame');
    videoFrame.src = url;
    videoOverlay.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ring').addEventListener('click', function() {
        showVideo("https://www.youtube.com/embed/CT4YfTEHlHY?si=_Ckz8TkX9STvdnkX&autoplay=1&start=36");
    });

    document.getElementById('smoke')?.addEventListener('click', function() {
        showVideo("https://www.youtube.com/embed/UdE0qjbwwWo?si=ZLO-nQTh6KH5SORk&autoplay=1");
    });

    document.getElementById('not_pass')?.addEventListener('click', function() {
        showVideo("https://www.youtube.com/embed/GwmJ76VjXaE?si=zP7CpjPm-i3oMrzK&autoplay=1");
    });

    document.getElementById('fireworks')?.addEventListener('click', function() {
        showVideo("https://www.youtube.com/embed/hHdF66kj4_U?si=z0ghf0kZx1TIqUPz&autoplay=1");
    });

    document.getElementById('best_gandalf')?.addEventListener('click', function() {
        showVideo("https://www.youtube.com/embed/luYaruZ6EI0?si=Q4JJsAePjxWGmXH8&autoplay=1&end=130");
    });

    document.getElementById('adventure')?.addEventListener('click', function() {
        showVideo("https://www.youtube.com/embed/vAoarjuV0pg?si=CWfyNvzD-cPuprOm&autoplay=1");
    });

    document.getElementById('halfling')?.addEventListener('click', function() {
        showVideo("https://www.youtube.com/embed/bAbDHVSNavw?si=YVB-TH6yFjwiqIlZ&autoplay=1&start=143");
    });

    document.getElementById('close-button')?.addEventListener('click', function() {
        var videoOverlay = document.getElementById('video-overlay');
        var videoFrame = document.getElementById('overlay-video-frame');
        videoFrame.src = "";
        videoOverlay.style.display = 'none';
    });

    document.getElementById('video-overlay').addEventListener('click', function(event) {
        if (event.target === this) {
            var videoFrame = document.getElementById('overlay-video-frame');
            videoFrame.src = "";
            this.style.display = 'none';
        }
    });
});