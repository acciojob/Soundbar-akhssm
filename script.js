//your JS code here. If required.

const sounds = {
  applause: "https://www.fesliyanstudios.com/play-mp3/387",
  boo: "https://www.fesliyanstudios.com/play-mp3/438",
  gasp: "https://www.fesliyanstudios.com/play-mp3/439",
  tada: "https://www.fesliyanstudios.com/play-mp3/667",
  victory: "https://www.fesliyanstudios.com/play-mp3/620",
  wrong: "https://www.fesliyanstudios.com/play-mp3/671"
};

const buttonsContainer = document.getElementById("buttons");
let currentAudio = null;

for (let sound in sounds) {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => playSound(sound));
  buttonsContainer.appendChild(btn);
}

const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "stop";
stopBtn.addEventListener("click", stopSound);
buttonsContainer.appendChild(stopBtn);

function playSound(sound) {
  stopSound();
  currentAudio = new Audio(sounds[sound]);
  currentAudio.play();
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
