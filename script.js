// your JS code here

const sounds = {
  applause: "https://www.fesliyanstudios.com/play-mp3/387",
  boo: "https://www.fesliyanstudios.com/play-mp3/438",
  gasp: "https://www.fesliyanstudios.com/play-mp3/439",
  tada: "https://www.fesliyanstudios.com/play-mp3/667",
  victory: "https://www.fesliyanstudios.com/play-mp3/620",
  wrong: "https://www.fesliyanstudios.com/play-mp3/671"
};

const buttonsContainer = document.getElementById("buttons");
const audioPlayer = document.getElementById("audio-player");

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
  stopSound(); // stop previous
  audioPlayer.src = sounds[sound]; 
  audioPlayer.style.display = "block"; 
  audioPlayer.play(); 
}

function stopSound() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}
