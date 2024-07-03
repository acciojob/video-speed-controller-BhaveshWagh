const video = document.getElementById('video');
const playerButton = document.querySelector('.player__button');
const volumeInput = document.querySelector('.volume');
const playbackSpeedInput = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');
const progressFilled = document.querySelector('.progress__filled');

let isPlaying = false;

// Toggle play/pause state
playerButton.addEventListener('click', () => {
  if (isPlaying) {
    video.pause();
    playerButton.textContent = '►';
    isPlaying = false;
  } else {
    video.play();
    playerButton.textContent = '❚ ❚';
    isPlaying = true;
  }
});

// Update volume
volumeInput.addEventListener('input', () => {
  video.volume = volumeInput.value / 100;
});

// Update playback speed
playbackSpeedInput.addEventListener('input', () => {
  video.playbackRate = playbackSpeedInput.value;
});

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
  video.currentTime = Math.max(0, video.currentTime - 10); // Ensure time does not go below 0
});

// Skip forward 25 seconds
forwardButton.addEventListener('click', () => {
  video.currentTime = Math.min(video.duration, video.currentTime + 25); // Ensure time does not go beyond duration
});

// Update progress bar
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${progress}%`;
});
