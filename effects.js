// Floating Hearts

const heartsContainer = document.createElement("div");
heartsContainer.id = "hearts-container";
document.body.appendChild(heartsContainer);

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "-1";

    const duration = 5 + Math.random() * 5;

    heart.animate([
        {
            transform: "translateY(0) translateX(0) rotate(0deg)",
            opacity: 0
        },
        {
            opacity: 0.8,
            offset: 0.1
        },
        {
            transform: `translateY(-120vh) translateX(${Math.random()*100-50}px) rotate(360deg)`,
            opacity: 0
        }
    ], {
        duration: duration * 1000,
        easing: "linear"
    });

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 400);
