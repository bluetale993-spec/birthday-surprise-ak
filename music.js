const audio = document.createElement("audio");

audio.src = "kangal-irandal.mp3";
audio.loop = true;
audio.autoplay = true;

let savedTime = localStorage.getItem("musicTime");

if (savedTime) {
    audio.currentTime = savedTime;
}

audio.play().catch(() => {
    document.addEventListener("click", () => {
        audio.play();
    }, { once: true });
});

setInterval(() => {
    localStorage.setItem("musicTime", audio.currentTime);
}, 1000);

document.body.appendChild(audio);
audio.style.display = "none";
