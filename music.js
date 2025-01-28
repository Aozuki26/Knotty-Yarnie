 // JavaScript to toggle music
 const musicToggle = document.getElementById('music-toggle');
 const backgroundMusic = document.getElementById('background-music');
 const musicIcon = document.getElementById('music-icon');

 const musicOffIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
 musicOffIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
 musicOffIcon.setAttribute('viewBox', '0 0 24 24');
 musicOffIcon.setAttribute('fill', 'currentColor');
 musicOffIcon.setAttribute('class', 'size-6');

 const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
 path.setAttribute('d', 'M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z');

 musicOffIcon.appendChild(path);

 const pauseIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
 pauseIcon.setAttribute('d', 'M5 4h14v14H5z');
 pauseIcon.setAttribute('id', 'pause-icon');

 musicToggle.addEventListener('click', () => {
     const isMusicPlaying = musicToggle.getAttribute('data-playing') === 'true';

     while (musicIcon.firstChild) {
         musicIcon.removeChild(musicIcon.firstChild);
     }

     if (isMusicPlaying) {
         backgroundMusic.pause();
         musicIcon.appendChild(musicOffIcon.cloneNode(true));
     } else {
         backgroundMusic.play();
         musicIcon.appendChild(pauseIcon.cloneNode(true));
     }

     musicToggle.setAttribute('data-playing', !isMusicPlaying);
 });
// Optional: Set initial volume
bgMusic.volume = 0.2;

