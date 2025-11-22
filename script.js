const soundMap = {
  "KeyA": "./tunes/24.mp3",
  "KeyS": "./tunes/29.mp3",
  "KeyD": "./tunes/36.mp3",
  "KeyF": "./tunes/41.mp3",
  "KeyG": "./tunes/48.mp3",
  "KeyH": "./tunes/53.mp3",
  "KeyJ": "./tunes/60.mp3",
  "KeyK": "./tunes/64.mp3",
  "KeyL": "./tunes/65.mp3",
  "KeyQ": "./tunes/69.mp3",
  "KeyW": "./tunes/72.mp3",
  "KeyE": "./tunes/77.mp3",
  "KeyR": "./tunes/79.mp3"
};

document.addEventListener("keydown", function (e) {
  let soundFile = soundMap[e.code];
  if (soundFile) {
    let audio = new Audio(soundFile);
    audio.play();
    let keyDiv = document.querySelector(`.${e.code.toLowerCase()}`);
    if (keyDiv) {
      keyDiv.classList.add("active-key");

      setTimeout(() => {
        keyDiv.classList.remove("active-key");
      }, 150);
    }
  }
});
