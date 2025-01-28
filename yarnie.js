let currentFrame = 0;  // Start with the first frame
const totalFrames = 48;  // Total frames in the sprite sheet (7x7 grid)

const mascot = document.getElementById('mascot');

function updateMascotFrame() {
  const framesPerRow = 7;  // 7 frames per row
  const frameWidth = 81;  // Width of one frame (81px)
  const frameHeight = 78;  // Height of one frame (78px)

  const row = Math.floor(currentFrame / framesPerRow);  // Determine the row
  const column = currentFrame % framesPerRow;  // Determine the column

  // Update the background position to show the current frame
  mascot.style.backgroundPosition = `-${column * frameWidth}px -${row * frameHeight}px`;

  currentFrame++;  // Increment the current frame

  // Reset to the first frame after reaching the last frame
  if (currentFrame >= totalFrames) {
    currentFrame = 0;
  }
}

// Update the mascot's frame every 100 milliseconds (adjust timing as needed)
setInterval(updateMascotFrame, 100);
