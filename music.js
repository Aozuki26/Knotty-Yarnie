// JavaScript to toggle music
document.addEventListener("DOMContentLoaded", function () {
    const musicToggle = document.getElementById("music-toggle");
    const backgroundMusic = document.getElementById("background-music");
    const musicIcon = musicToggle.querySelector("i"); // Select the icon inside the button

    // Optional: Set initial volume
    backgroundMusic.volume = 0.2;

    let isMusicPlaying = false;

    musicToggle.addEventListener("click", function () {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicIcon.classList.remove("bx-pause"); // Remove pause icon
            musicIcon.classList.add("bx-music-off"); // Add music off icon
        } else {
            backgroundMusic.play();
            musicIcon.classList.remove("bx-music-off"); // Remove music off icon
            musicIcon.classList.add("bx-pause"); // Add pause icon
        }
        isMusicPlaying = !isMusicPlaying;
    });
});
